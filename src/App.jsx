
import './App.css'

import { Route, Routes, } from 'react-router';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import TopicsList from './components/TopicsList';

function App() {


  return (
    <>
      <div>
      <Header />
      <TopicsList />
      <Routes>
        <Route path="/articles"  element ={<ArticleList/>}/>
        <Route path="/articles/:article_id"  element ={<Article/>}/>   
      </Routes>
      </div>
    </>
  )
}

export default App
