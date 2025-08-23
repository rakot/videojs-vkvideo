# VkVideo Playback Technology <br />for [Video.js](https://github.com/videojs/video.js)
## Based on [videojs-youtube](https://github.com/videojs/videojs-youtube)


## Install
You can use npm (`npm install videojs-vkvideo`) or the source and build it using `npm run build`. Then, the only file you need is dist/VkVideo.min.js.

## Example
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
  <video
    id="vid1"
    class="video-js"
    controls
    autoplay
    width="640" height="264"
    data-setup='{ "sources": [{ "type": "video/vk", "src": "https://vk.com/feed?z=video-91365527_456242242"}] }'
  >
  </video>

  <script src="../node_modules/video.js/dist/video.min.js"></script>
  <script src="../dist/VkVideo.min.js"></script>
</body>
</html>
```

## License
The MIT License (MIT)

Copyright (c) Sergey Vardanyan <rakot.ss@gmail.com> and videojs-youtube contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.