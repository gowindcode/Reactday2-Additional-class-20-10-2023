
import './App.css'

// function App() {
  // const data = {
  //   name: "VARISU",
  //   img: "https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2023/1/11/vijay-varisu-poster.jpg",
  //   ratings: 85,
  // }
  //   const data1 = {
  //   name: "JAILER",
  //   img: "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/Rajinikanth-s-Jailer-was-released-over-the-weekend_1695094483358_1695094535793.png",
  //   ratings: 90,
  // }
  // const data2 = {
  //   name: "THUNIVU",
  //   img: "https://cdn.123telugu.com/content/wp-content/uploads/2023/02/Thunivu-1.jpg",
  //   ratings: 92,
  // }
  // const data3 = {
  //   name: "Por Thozhil",
  //   img: "https://www.tollywood9.com/wp-content/uploads/2023/06/maxresdefault-31.jpg",
  //   ratings: 78,
  // }

  //instead of above we should write many data, but as like below converting to array we write do code easily
  function App() {
    const data = [{
      name: "VARISU",
      img: "https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2023/1/11/vijay-varisu-poster.jpg",
      ratings: 91,
    },
    {
      name: "JAILER",
      img: "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/Rajinikanth-s-Jailer-was-released-over-the-weekend_1695094483358_1695094535793.png",
      ratings: 90,
    },
    {
      name: "THUNIVU",
      img: "https://cdn.123telugu.com/content/wp-content/uploads/2023/02/Thunivu-1.jpg",
      ratings: 92,
    },
    {
      name: "Por Thozhil",
      img: "https://www.tollywood9.com/wp-content/uploads/2023/06/maxresdefault-31.jpg",
      ratings: 75,
    },
    {
      name: "AARYAN",
      img: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2022/9/2/original/AARYAN.jpeg?w=640&dpr=2.0",
      ratings: 77,
    },
    {
      name: "RRR",
      img: "https://oyeeabhi.com/wp-content/uploads/2022/12/New-Poster-14.webp",
      ratings: 98,
    },
  ]
  return (

    //instead of writing this much of Movide cards we can simplify only one movie card using .map and key, bcz we need to identify the unique object information
    <div className='app'>
      {
      data.map((movie, idx) => (
        <MovieCard key = {idx}
        img={movie.img}
        name={movie.name}
        ratings={movie.ratings}
        />
      ))
      }
    </div>
  )}
  
    // <div className='app'>
    //   <MovieCard
    //   name = {data.name}
    //   img =  {data.img}
    //   ratings = {data.ratings}/>

    //   <MovieCard
    //   name = {data1.name}
    //   img =  {data1.img}
    //   ratings = {data1.ratings}/>

    //   <MovieCard
    //   name = {data2.name}
    //   img =  {data2.img}
    //   ratings = {data2.ratings}/>

    //   <MovieCard
    //   name = {data3.name}
    //   img =  {data3.img}
    //   ratings = {data3.ratings}/>     
    // </div>

  //   )
  // }
  
  export default App

// eslint-disable-next-line react/prop-types
function MovieCard ({img, name, ratings}) {
  return (
    <div className='movie-card'>
      <div className='img-sec'>
        <img src= {img}/>
      </div>
      <div className='movie-name'>
        <h3>{name}</h3>
      </div>
      <div className='moviebtn-rtdetails'>
        <button>Watch Now</button>
        <p>Ratings:{ratings}%</p>
      </div>
    </div>
  )
}
//option 1 we can write code as like this or we can write code option 2, 3 

// function MovieCard (data) {
//   return (
//     <div className='movie-card'>
//       <div className='img-sec'>
//         <img src= {data.img}/>
//       </div>
//       <div className='movie-name'>
//         <h3>{data.name}</h3>
//       </div>
//       <div className='moviebtn-rtdetails'>
//         <button>Watch Now</button>
//         <p>Ratings:{data.ratings}%</p>
//       </div>
//     </div>
//   )
// }

//option 2 we can write code as like this or we can write code option 3 
  // function MovieCard () {
  //   const data = {
  //     name: "IRON MAN 4",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ujf71IivKnTKNP7ZbvEUVb9Qp2XLINT_3w&usqp=CAU",
  //     // img:"https://images.newindianexpress.com/uploads/user/imagelibrary/2023/6/17/w900X450/New_Project.jpg?w=400&dpr=2.6",
  //     ratings: 80,
  //   }
  //   return (
  //     <div className='movie-card'>
  //       <div className='img-sec'>
  //         <img src= {data.img}/>
  //       </div>
  //       <div className='movie-name'>
  //         <h3>{data.name}</h3>
  //       </div>
  //       <div className='moviebtn-rtdetails'>
  //         <button>Watch Now</button>
  //         <p>Ratings:{data.ratings}%</p>
  //       </div>
  //     </div>
  //   )
  // }  // option 3  we can wirte code like below
  // function MovieCard () {
  //   return (
  //     <div className='movie-card'>
  //       <div className='img-sec'>
  //         <img src='https://images.newindianexpress.com/uploads/user/imagelibrary/2023/6/17/w900X450/New_Project.jpg?w=400&dpr=2.6'/>
  //       </div>
  //       <div className='movie-name'>
  //         <h3>ADIPURUSH</h3>
  //       </div>
  //       <div className='moviebtn-rtdetails'>
  //         <button>Watch Now</button>
  //         <p>Ratings:<mark>90%</mark></p>
  //       </div>
  //     </div>
  //   )
  // }
  // function Task (){
    // mostly use for project below type
    // return (
    //   <div>
    //     <h1>Welcome to React day-2 Additional session calss on 20.10.2023</h1>
    //   </div>

      // instead of this we can write like this we can use, but it's take to much time and code's, 
      // but here only now we see how .jsx works behind the screen

      // return React.createElement(
      //   "h1",
      //   null,
      //   // null or {}, we can write color style code in side of {id:"greet", className:"greet-class"}   
      //   "Welcome to React day-2 Additional session calss on 20.10.2023"
      // );
  //   )
  // return React.createElement(
  //   "div",
  //   {className:"greet-msg"},
  //    React.createElement(
  //     "h1",
  //     {id:"head-msg"},
  //     "Class live Task to make this but it's for understanding purpose for interview, so use codesandbox website to show how it works"
  //    )
  // )
  // }


   