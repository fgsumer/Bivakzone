if (!props.showModal){
    id = props.location.pathname.split("/").slice(2).slice(-5).join("/");
   $bivakzone = Bivakzones.features.find(bivakzone => bivakzone.id == id)
}