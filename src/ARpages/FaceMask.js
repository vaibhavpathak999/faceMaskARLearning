import React from 'react'

function FaceMask() {
    return (
        <div>
            <canvas width="115" height="280" id="jeeFaceFilterCanvas"></canvas>
            <canvas width="600" height="600" id="frameCanvas" className="FrameCanvas"></canvas>
            {/* <canvas width="1200" height="1200" id="canvasVideoEffect"></canvas> */}

            {/* <!-- BEGIN OF A-FRAME SCENE --> */}
            {/* <!-- All objects with the ID jeelizFaceFilterFollow will follow the head --> */}
            <a-scene>
                <a-assets>
                    <a-asset-item
                        id="mask"
                        position="0 0 0"
                        src="https://cdn.glitch.com/3f35993f-6c9d-4b3e-a61d-17e740d68d9b%2Fout%20(2).glb?v=1613993807055"
                        response-type="arraybuffer"
                    >
                    </a-asset-item>
                </a-assets>

                <a-plane
                    id="jeelizFaceFilterFollow"
                    position="0 0.5 -5"
                    rotation="0 0 0"
                    width="3"
                    height="1.5"
                    depth="1"
                    color="#FFFFFF"
                    animate-png
                >
                    {/* <a-image src="https://cdn.glitch.com/3f35993f-6c9d-4b3e-a61d-17e740d68d9b%2Fmask%402x.png?v=1613996146160" position="0 -3.0 -4" scale="3.0 3.0 3.0">
                    </a-image> */}

                    {/* <script>{entity.emit('animate-png', null, true)}</script> */}
                    {/* <a-entity
                    position="0.5 -3 -5"
                    scale="0.8 0.8 0.8"
                    gltf-model="#mask"
                    animation-mixer
        ></a-entity> */}
                </a-plane>

                {/* <a-plane
                position="0 0 -4"
                rotation="-90 0 0"
                width="4"
                height="4"
                color="#7BC8A4"
      ></a-plane> */}
                <a-sky color="#ECECEC"></a-sky>
            </a-scene>
            {/* <!-- END OF A-FRAME SCENE --> */}
        </div>
    )
}

export default FaceMask
