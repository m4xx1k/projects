import React, {useEffect, useRef, useState} from 'react';
import io from 'socket.io-client';
import {useParams} from "react-router-dom";

const Room = () => {
    const {id: roomID} = useParams()
    const socketRef = useRef();
    const userVideoRef = useRef();
    const [peers, setPeers] = useState([]); // Initialize peers as an empty array

    useEffect(() => {
        // Initialize socket connection to the server
        socketRef.current = io.connect('http://localhost:5000');

        // Get access to user's camera and microphone
        navigator.mediaDevices
            .getUserMedia({video: true, audio: true})
            .then((stream) => {
                userVideoRef.current.srcObject = stream;

                // Handle user joining the room
                socketRef.current.emit('join room', roomID);

                socketRef.current.on('all users', (users) => {
                    const newPeers = [];
                    users.forEach((userID) => {
                        const peer = createPeer(userID, socketRef.current.id, stream);
                        peers.current.push({
                            peerID: userID,
                            peer,
                        });
                        newPeers.push({
                            peerID: userID,
                            peer,
                        });
                    });
                    setPeers(newPeers);
                });

                // Handle signaling data
                socketRef.current.on('user joined', ({signal, callerID}) => {
                    const peer = addPeer(signal, callerID, stream);
                    peers.current.push({
                        peerID: callerID,
                        peer,
                    });
                    setPeers([...peers.current]);
                });
            });
        socketRef.current.on('user joined', ({signal, callerID}) => {
            const peer = addPeer(signal, callerID, stream);
            // peers.push(); // Push the new peer to the , array
            setPeers([...peers, {peerID: callerID, peer}]); // Update the state to trigger a re-render
        });

        return () => {
            // Cleanup code
            socketRef.current.disconnect();
        };
    }, [roomID]);

    const createPeer = (userToSignal, callerID, stream) => {
        // Create a new Peer object
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302',
                },
            ],
        });

        // Add the user's stream to the connection
        stream.getTracks().forEach((track) => peer.addTrack(track, stream));

        // Listen for the ICE candidate event and send it to the peer
        peer.onicecandidate = (event) => {
            if (event.candidate) {
                socketRef.current.emit('sending signal', {
                    userToSignal,
                    callerID,
                    signal: event.candidate,
                });
            }
        };

        return peer;
    };

    const addPeer = (incomingSignal, callerID, stream) => {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302',
                },
            ],
        });

        // Add the user's stream to the connection
        stream.getTracks().forEach((track) => peer.addTrack(track, stream));

        // Set the remote description
        peer.setRemoteDescription(incomingSignal);

        // Create an answer and send it to the caller
        peer.createAnswer().then((answer) => {
            peer.setLocalDescription(answer);
            socketRef.current.emit('returning signal', {answer, callerID});
        });

        return peer;
    };

    return (
        <div>
            <video ref={userVideoRef} autoPlay muted/>
            {peers?.map((peer) => (
                <video key={peer.peerID} autoPlay/>
            ))}
        </div>
    );
};

export default Room;
