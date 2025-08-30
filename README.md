>> creating a new file
Create Custom react Hook for fetching data form apis
live URl=  https://frabjous-cuchufli-ddc009.netlify.app/

first
>> app setup
  npm create vite@latest
  npm i 
  cd app
  npm i axios (for creating hook)
  npm run div
[hindi>> basic app banane ke liye ]

second         
>> Create (Hooks) folder inside a src  and then create a new file useFetch.js  

[hindi>> useFetch.js me ham hamare custom hook logic likhe ge ]

third    
>> creating hook
  1) create react arrow function (name is useFetch)
  2) import axios , useState , useEffect 
  3) inside useFetch create three useState (name is data ,loading , error)     
  4) create async arrow function for get data 
  5) use useEffect of recall function 
  6) return data , loading , error 
  7) export it 

[hindi>> ab hamane ek custom hook bana liya hai jo api se data lake deta hai ]  

forth
>> use our hook (useFetch)
  1) import hook
  2) diclear variables [ const {data,loading,error} = useFect("API")]
  3) handle loading and error 
  [
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;]
  4) render elements using  .map function
  [  {data.map((items) => (
          <div key={items.id} className="product-card">
            <img src={items.images[0]} alt={items.title} />
            <h3>{items.title}</h3>
            <p>${items.price}</p>
          </div>
        ))}]
