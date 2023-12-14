
import './App.css';
// import userImg from './mkpng.png';

function App() {
  return (
    <div className='row '>
      <div className="main-section p-4 m-auto my-4 col-12 col-md-8 col-lg-8  h-100 row ">
        <div className=' col-md-8 col-lg-8 '>
          <h2>mahesh kumar</h2>
        </div>

        {/* Gota, Ahmedabad 382481, 9429230712, maheshsuthar083@gmail.com */}
        <div className='font-1 addres-section  col-md-4 col-lg-4 '>
          <div> Gota , Ahmedabad 382481</div>
          <div>9429230712 </div>
          <div>maheshsuthar083@gmail.com</div>
        </div>
        <div className=' col-md-8 col-lg-8 '>
          <h6>EXPERIENCE
          </h6>
          <div className='mb-3'>
            <h4>CloseDigit LLP
            </h4>
            <div> Ahmedabad </div>
            <div>Software Development Internship </div>
            <div>Aug 2022 - Feb-2023</div>
          </div>

          <div>
            <h4>App TraitSolution
            </h4>
            <div> Ahmedabad </div>
            <div>Frontend Developer</div>
            <div>Feb-2023 - Present
            </div>
          </div>
        </div>
        <div className='font-1 addres-section  col-md-4 col-lg-4 '>
          <div className='mb-3'> 
            <h6>SKILLS
            </h6>
            <div>Bootstrap , Mui , React JS , Redux ,
              ,Chrome Dev Tools ,
              Responsive Design , REST API ,
              Testing & Debugging ,
              [ Node ,Express ,Mongo ] Fresher
            </div>
          </div>
          <div>
            <h6>PROJECTS
            </h6>
            <div>https://triviamaker.com/.
              https://triviamaker.ai
              https://react.surveyslack.com/
            </div>
          </div>
        </div>
      </div>

      {/* <div className=' font-1 addres-section  col-md-4 col-lg-4 '> */}
      {/* <img className='rotate' alt='img' src={userImg}/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
