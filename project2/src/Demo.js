import './App.css'

var users = [
  {
    id: 1,
    name: 'Vu Duy Nhien',
    class: 12,
    isFucked: 0
  },
  {
    id: 1,
    name: 'Vu Ngoc Linh',
    class: 12,
    isFucked: 0
  }
];

var elements = users.map((user, index) => {
  return <div>
            <h2> { user.name }</h2>
            <p> { user.class }</p>
         </div>
});

var product = {
  id: 1,
  name: "Vu Duy Nhien",
  price: 1232323,
  status: 1
};
function show(product) {
  if (product.status) {
      return <h3>
                  id : { product.id } <br/>
                  name : { product.name } <br/>
                  price : { product.price } <br/>
                  status : { product.status }
            </h3>
  }
}

function callne() {
  console.log("hello if you want to be a good programmer i want to fuck you");
}

function Demo() {
  return (
    <div className="ml-30">
      <div className="card" style={{ width: "20rem" }}>
        <img
          src="https://1.bp.blogspot.com/-YAW7nk4LsnU/YLcAo7xLPeI/AAAAAAAAA5s/N5K2qAWUvkcvSCg66JHWygWlV4DmrAMbwCLcBGAsYHQ/s838/60691b748eb9420a98620a50_vu_to_7.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>

        <h1> 
          
        </h1> 
        <hr/>

        <div>
            <h1> { elements }</h1>

        </div>
      </div>
      <div>
    <button type="submit" className="btn btn-primary mt-2" onclick={ callne() }>Submit</button>
</div>
    </div>
  );
}

export default Demo;
