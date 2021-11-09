import React,{useState,useEffect} from 'react';
import './Main.css';
import ImageSlider1 from './images/desktop-image-hero-1.jpg'

function Main() {
    const [CurentTitle,SetCurentTitle] = useState("");
    const [CurentText,SetCurentText] = useState("");
    const [CurentIndex,SetCurentIndex] = useState(0);
    
    const TitleArticles = new Array("Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials");
    const TextArticles = new Array("We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
                                "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
                                "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.")


    useEffect(()=>{
        SetCurentTitle(TitleArticles[CurentIndex]);
        SetCurentText(TextArticles[CurentIndex]);
    },[]);

    const Slide = (direction) =>{
        if(CurentIndex+direction<3 && CurentIndex+direction>=0){
            SetCurentTitle(TitleArticles[CurentIndex+direction]);
            SetCurentText(TextArticles[CurentIndex+direction]);
            SetCurentIndex(CurentIndex+direction);

        }
        else{
            if(direction==-1)direction=2;
            else direction = 0;
            SetCurentTitle(TitleArticles[direction]);
            SetCurentText(TextArticles[direction]);
            SetCurentIndex(direction);
        }
        
    }

  return (
    <div className="Main">
        <div className="Upper-Section">
            <div className="Image-Slider">
            </div>

            <div className="text-section-1">
                <h1>{CurentTitle}</h1>
                
                <p>{CurentText}</p>

                <a href="#">Shop now</a>

                <div className="arrows-slider">
                    <div className="arrow arrow-left" onClick={()=>Slide(-1)}></div>
                    <div className="arrow arrow-right" onClick={()=>Slide(1)}></div>
                </div>
            </div>

        </div>

        <div className="Lower-Section">
            <div className="lower-image1"></div>
            <div className="text-section-2">
                <h1>About our furniture</h1>
                
                <p>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
            
            </div>
            <div className="lower-image2"></div>

        </div>
      
    </div>
  );
}

export default Main;
