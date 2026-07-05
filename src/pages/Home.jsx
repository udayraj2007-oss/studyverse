import Hero from "../components/Hero";
import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PdfCard from "../components/PdfCard";
import notes from "../data/notes";
import FilterBar from "../components/FilterBar";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Categories from "../components/Categories";
import LatestNotes from "../components/LatestNotes";
import Footer from "../components/Footer";

function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

 const filteredNotes = notes.filter((note) => {

  const matchSearch = note.title
    .toLowerCase()
    .includes(search.toLowerCase());

  if (filter === "all")
    return matchSearch;

  if (filter === "class7")
    return note.class === "Class 7" && matchSearch;

  if (filter === "class8")
    return note.class === "Class 8" && matchSearch;

  if (filter === "maths")
    return note.subject === "Maths" && matchSearch;

  if (filter === "science")
    return note.subject === "Science" && matchSearch;

  return matchSearch;

});

  return (
    <>
      <Header />
      <Hero />
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <FilterBar
       filter={filter}
       setFilter={setFilter} 
      /> 

<Stats />
<Features />
<Categories />
<LatestNotes />


      <div className="section-title">
  <h2>📚 Latest Notes</h2>
  <p>Choose your chapter and start learning for free.</p>
</div>

<div className="cards">
  {filteredNotes.map((note, index) => (
    <PdfCard
      key={index}
      title={note.title}
      file={note.file}
      className={note.class}
      subject={note.subject}
    />
  ))}
</div>
<Footer />
    </>
  );
}

export default Home;