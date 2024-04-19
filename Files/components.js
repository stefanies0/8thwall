
const backpackTextureComponent = {
    init() {
      this.handleComplete = this.handleComplete.bind(this);
      this.el.sceneEl.addEventListener('openai-imagecomplete', this.handleComplete);
    },
    handleComplete(e) {
      const mesh = this.el.getObject3D('mesh');
      if (!mesh) {
        return;
      }
      const texture = new THREE.TextureLoader().load(e.detail.url);
      mesh.traverse((node) => {
        if (node.isMesh && node.material && node.material.name === 'Backpack') {
          // Apply texture to the material named "Backpack"
          node.material.map = texture;
          node.material.map.flipY = false;
          node.material.map.needsUpdate = true;
        }
      });
    },
    remove() {
      this.el.sceneEl.removeEventListener('openai-imagecomplete', this.handleComplete);
    },
  };
  
  export {
    backpackTextureComponent,
  };
  
  
  