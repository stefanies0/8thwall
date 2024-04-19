// Component that places model where the ground is clicked

export const tapPlaceComponent = {
    schema: {
      min: {default: 15},
      max: {default: 20},
    },
    init() {
      const ground = document.getElementById('ground')
      this.prompt = document.getElementById('promptText')
      this.placedModels = [];
      
      ground.addEventListener('click', (event) => {
        // Dismiss the prompt text.
        this.prompt.style.display = 'none'
        
        // Create new entity for the new object
        const newElement = document.createElement('a-entity')
  
        // The raycaster gives a location of the touch in the scene
        const touchPoint = event.detail.intersection.point
        newElement.setAttribute('position', touchPoint)
  
        const randomYRotation = Math.random() * 360
        newElement.setAttribute('rotation', `0 ${randomYRotation} 0`)
  
        const randomScale = Math.floor(Math.random() * (Math.floor(this.data.max) - Math.ceil(this.data.min)) + Math.ceil(this.data.min))
  
        newElement.setAttribute('visible', 'false')
        newElement.setAttribute('scale', '0.0001 0.0001 0.0001')
  
        newElement.setAttribute('shadow', {
          receive: false,
        })
  
        const availableModels = ['#MysticCorn', '#Sculpture', '#Boccioni'].filter(model => !this.placedModels.includes(model));
        
        if (availableModels.length > 0) {
          const randomModelIndex = Math.floor(Math.random() * availableModels.length);
          const selectedModel = availableModels[randomModelIndex];
          newElement.setAttribute('gltf-model', selectedModel);
          this.placedModels.push(selectedModel); // Add the placed model to the array
        } else {
          // If all models have been placed, alert the user or handle the scenario accordingly
          console.log('All models have been placed.');
          return;
        }
  
        this.el.sceneEl.appendChild(newElement)
  
        newElement.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          newElement.setAttribute('visible', 'true')
          newElement.setAttribute('animation', {
            property: 'scale',
            to: `${randomScale} ${randomScale} ${randomScale}`,
            easing: 'easeOutElastic',
            dur: 800,
          })
  
        newElement.setAttribute('class', 'cantap')
        newElement.setAttribute('xrextras-hold-drag', '')
        //newElement.setAttribute('xrextras-pinch-scale', '')
        })
      })
    },
  }
  