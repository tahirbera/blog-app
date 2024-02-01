import './App.css'
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import Slider from './components/Slider';
import SearchTop from './components/SearchTop';
import SideBar from './components/SideBar';
import ArticleGroup from './components/ArticleGroup'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ad from './components/Ad';
import Article from './components/Article';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div className='app'>
        
        <SideBar />
        <div className='content-wrapper'>
          <div className='content'>
             <SearchTop />
             <Slider />
             <ArticleGroup />
             
          </div>
        </div>
      </div>

  },
  {
    path: "/:kategoriadi",
    element: 
    <div className='app'>
        
        <SideBar />
        <div className='content-wrapper'>
          <div className='content'>
             <SearchTop />
             <Slider />
             <ArticleGroup />
             
          </div>
        </div>
      </div>

  },
  {
    path: '/article/:kategoriadi/:id',
    element:
    <div className='app'>
        
    <SideBar />
    <div className='content-wrapper'>
      <div className='content'>
         <SearchTop />
         <Ad />
         <Article />
         <Slider />
         
         
      </div>
    </div>
  </div>
  },
]);

export default function App() {

  return(
    <>
    <RouterProvider router={router} />

      
    </>
  )
}



