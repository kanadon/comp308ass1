/**
 * Created by DENIS on 10/02/2017.
 */
var Expander = (function(){
    function Expander(container) {
      var me = this;

      this.Container = container;
      this.Header = container.querySelector(".expander-header");
      this.HeaderHeight = getComputedStyle(this.Header).height.split("px")[0];
      this.ContentHeight = getComputedStyle(container.children[1]).height.split("px")[0];
      this.Open = false;

      container.style.overflow = "hidden";

      this.Collapse();

      this.Header.addEventListener("click", function () {
        if(me.Open)
          me.Collapse();
        else{
          me.Expand();
        }
      });
    }

    Expander.prototype.Expand = function () {
      this.Container.style.maxHeight = this.HeaderHeight + this.ContentHeight + "px";
      this.Open = true;
    };

    Expander.prototype.Collapse = function () {
      this.Container.style.maxHeight = this.HeaderHeight + "px";
      this.Open = false;
    };

    return Expander;
  }
)();