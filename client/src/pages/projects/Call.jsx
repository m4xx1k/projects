import React, { useState, useEffect } from "react";
import ReactWebRTC from "react-webrtc";
import io from "socket.io-client";

const CallRoom = ({ roomId }) => {
    const [users, setUsers] = useState([]);
    const [localStream, setLocalStream] = useState(null);
    const [remoteStreams, setRemoteStreams] = useState([]);

    useEffect(() => {
        const socket = io("https://localhost:5000");

        socket.on("all users", (users) => {
            setUsers(users);
        });

        socket.on("user joined", (user) => {
            setUsers([...users, user]);
        });

        socket.on("user left", (user) => {
            setUsers(users.filter((u) => u.id !== user.id));
        });

        // Create a local video stream
        const localStream = new MediaStream();
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
                setLocalStream(stream);
            })
            .catch((error) => {
                console.log(error);
            });

        // Create a PeerJS connection
        const peer = new PeerJS();

        // Join the room
        peer.on("open", () => {
            socket.emit("join room", roomId);
        });

        // Create a peer connection for each remote user
        peer.on("call", (call) => {
            const remoteStream = new MediaStream();
            call.answer(localStream);
            call.on("stream", (stream) => {
                remoteStream.addTrack(stream.getAudioTracks()[0]);
                remoteStream.addTrack(stream.getVideoTracks()[0]);
                setRemoteStreams([...remoteStreams, remoteStream]);
            });
        });

        return () => {
            socket.disconnect();
            peer.disconnect();
        };
    }, [roomId]);

    // Render the video streams of all users
    return (
        <div>
            <h1>Call Room</h1>
            <div className="video-container">
                <ReactWebRTC
                    video={localStream}
                    audio={localStream}
                    muted={true}
                />
                {remoteStreams.map((stream, index) => (
                    <ReactWebRTC
                        key={index}
                        video={stream}
                        audio={stream}
                    />
                ))}
            </div>
        </div>
    );
};

export default CallRoom;
