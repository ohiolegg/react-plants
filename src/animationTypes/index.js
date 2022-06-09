export const fadeInUp = {
    hidden: {
       y: 50, 
       opacity: 0
   },
   visible: custom => ({
       y: 0, 
       opacity: 1,
       transition: {
           type: 'tween', 
           stiffness: 50,
           delay: custom 
          }
   })
} 

export const fadeInDown = {
   hidden: {
      y: -50, 
      opacity: 0
  },
  visible: custom => ({
      y: 0, 
      opacity: 1,
      transition: {
       type: 'tween', 
       stiffness: 50,
       delay: custom 
      }
  })
} 

export const fadeInRight= {
   hidden: {
      x: 50, 
      opacity: 0
  },
  visible: custom => ({
      x: 0, 
      opacity: 1,
      transition: {
       type: 'tween', 
       stiffness: 50,
       delay: custom 
      }

  })
}

export const fadeInLeft = {
   hidden: {
      x: -50, 
      opacity: 0
  },
  visible: custom => ({
      x: 0, 
      opacity: 1,
      transition: {
       type: 'tween', 
       stiffness: 50,
       delay: custom 
      }
  })
}

export const zoomIn = {
   hidden: {
      scale: 0.8, 
      opacity: 0
  },
  visible: custom => ({
      y: 0, 
      opacity: 1,
      scale: 1, 
      transition: {
       duration: 1,
       delay: custom 
      } 
  })
} 

export const zoomOut = {
   hidden: {
      scale: 1.2, 
      opacity: 0
  },
  visible: custom => ({
      y: 0, 
      opacity: 1,
      scale: 1, 
      transition: {
       duration: 1,
       delay: custom 
      } 
  })
} 