// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'ws://192.168.1.4:3000/websocket';

// Override METEOR_URL in production
if (process.env.NODE_ENV === 'production') {
    METEOR_URL = '';
}

export const settings = {
    env: process.env.NODE_ENV,
    METEOR_URL,
};

export default settings;