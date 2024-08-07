export const AddData = (data) => {
    console.log("key and ", data);
    let isValidtion=true
  
    let existingData = localStorage.getItem("cartdata");
    
    existingData = existingData ? JSON.parse(existingData) : [];
    
    existingData.forEach(element => {
      if(element.data.id==data.id){
        element.count++
        isValidtion=false
      }
    });

    if(isValidtion){
      existingData.push({data,count:1});


    }
  
    localStorage.setItem("cartdata", JSON.stringify(existingData));
  };
  

export  const deletItem=(id)=>{
    let existingData = localStorage.getItem("cartdata");
    existingData=JSON.parse(existingData)

    existingData.forEach((elm)=>{
      console.log(elm.data.id==id)
      if(elm.data.id==id){
        elm.count--
      }
    })
    localStorage.setItem("cartdata", JSON.stringify(existingData));

  }

