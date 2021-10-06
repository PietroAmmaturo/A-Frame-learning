//just a concept, nothing is working for now 
AFRAME.registerComponent('first-intersection-only', {
    init: function () {

      this.el.addEventListener('raycaster-intersection', evt => {
        console.log("component", this);
        this.intersecting = evt.detail.els;
        console.log("component", evt.detail.els);
        console.log("component", evt.detail.els[0]);
        
        let obj = evt.detail.els[0];
        console.log("component", obj.components["raycaster-listen"].raycaster);
        let obj_intersection = obj.components["raycaster-listen"].raycaster.components.raycaster.getIntersection(obj.el);
        console.log("component", obj_intersection["distance"]);

      });
    }
  });
  
  function checkIntersection(myobj) {
    console.log("checkIntersection", myobj);
    let obstacle = document.querySelector('#structure');
    let obstacle_intersection = obstacle.components["raycaster-listen"].raycaster.components.raycaster.getIntersection(obstacle.el);
    if (!obstacle_intersection) { return 1; }

    let myobj_intersection = myobj.components["raycaster-listen"].raycaster.components.raycaster.getIntersection(myobj.el);

    if (myobj_intersection["distance"] <= obstacle_intersection["distance"]) {
      console.log("intersection valid");
      return 1;
    } else {
      console.log("intersection invalid");
      return 0;
    }
  }