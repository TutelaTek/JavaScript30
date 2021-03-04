
    const checkboxes = document.querySelectorAll('.items input[type="checkbox"]');

    let lastChecked;

    function handleCheck(e){
      console.log(e);
      let inBetween = false;
      if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {

          if (checkbox === this || checkbox === last Checked) {
            inBetween = !inBetween;
            console.log("Starting to check them inbetween!");

          }

          if(inBetween)
          {
            checkbox.checked = true;
          }
        });
      }
      lastChecked = this;
    };

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
