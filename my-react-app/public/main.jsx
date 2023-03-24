import React, {Component} from 'react';
import {loadGLTF} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

class MindARThreeComponent extends Component {
  async componentDidMount() {
    const { container } = this.props;

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: container.current,
      imageTargetSrc: '../assets/targets/bee.mind',
    });

    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const ham = await loadGLTF('../assets/models/Bee.glb');
    ham.scene.scale.set(0.01, 0.01, 0.01);
    ham.scene.position.set(0, -0.4, 0);    

    const hamAnchor = mindarThree.addAnchor(0); //Index 0
    hamAnchor.group.add(ham.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }

  render() {
    return (
      <div ref={this.props.container}>
      </div>
    );
  }
}

export default MindARThreeComponent;