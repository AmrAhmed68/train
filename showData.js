function showData(...type) {
    let name ;
    let age;
    let hire ;
    for( let i = 0 ; i < type.length ; i++  ){
      if(typeof type[i] === "string"){
        name = type[i]
      } else if (typeof type[i] === "number") {
        age = type[i] 
      } else if (typeof type[i] === "boolean") {
        hire = type[i]
      }
      if (hire === true) {
        hire = "Available"
      } else {
        hire = "Not Available"
      }
    }
  
    console.log(`Hello ${name} , Your age is ${age} , You Are ${hire} For Hire`)
  
  }

  showData("Osama" , 18 , true)
showData( 18 , "Osama" , false )
showData( true , 18 , "Osama" )