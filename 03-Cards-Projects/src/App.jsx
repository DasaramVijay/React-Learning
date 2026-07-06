import React from 'react'
import Card from './Components/Card'

const App = () => {
  const jobs = [
  {
    company: "Amazon",
    logo: "https://imgs.search.brave.com/bZ-lYSs5AZc6gHsaH6wLDsUjiWKN5s2auLRVQlw_6bM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzg5/LzM2MF9GXzI5NDUx/ODk0MF9GQmZ3Wncz/MEhuV0JWOXB6RHA2/RUV2OXUxODVKTDZY/US5qcGc",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior-Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    company: "Google",
    logo: "https://imgs.search.brave.com/bZPY5KFGckvtEdvVeXVU518z-eAJvyopsZh3m6v-_Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full-Time",
    level: "Mid-Level",
    salary: "$100/hr",
    location: "Bangalore, India",
  },
  {
    company: "Microsoft",
    logo: "https://imgs.search.brave.com/54A9v3olhWA1OkYoWTBFixd29EVtflt7o4hEmvJdPuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NTE0LzgyNi9zbWFs/bC93aW5kb3dzLWJy/YW5kLXN5bWJvbC1s/b2dvLWRlc2lnbi1t/aWNyb3NvZnQtc29m/dHdhcmUtaWxsdXN0/cmF0aW9uLXdpdGgt/YmxhY2stYmFja2dy/b3VuZC1mcmVlLXZl/Y3Rvci5qcGc",
    posted: "1 week ago",
    title: "React Developer",
    type: "Full-Time",
    level: "Senior-Level",
    salary: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    company: "Netflix",
    logo: "https://imgs.search.brave.com/bG-xPD1-pu6r_82Ng7Quwo5_-vgop94F01k_siJATSY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/Mzk2LzgxNC9zbWFs/bC9uZXRmbGl4LW1v/YmlsZS1hcHBsaWNh/dGlvbi1sb2dvLWZy/ZWUtcG5nLnBuZw",
    posted: "3 days ago",
    title: "Product Designer",
    type: "Remote",
    level: "Senior-Level",
    salary: "$130/hr",
    location: "Delhi, India",
  },
  {
    company: "Adobe",
    logo: "https://imgs.search.brave.com/T5HE0uAi0zXg2Rf45GC-AJV0ZtPuKaBi3aOjNmRiIaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
    posted: "6 days ago",
    title: "UI Designer",
    type: "Contract",
    level: "Mid-Level",
    salary: "$95/hr",
    location: "Pune, India",
  },
  {
    company: "Spotify",
    logo: "https://imgs.search.brave.com/kz4KggnJuBJBXEikoAl7lpEwmxNeMPUqPUDGQNOR3Ac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI1LzIvc3BvdGlm/eS0yMDE0LWxvZ28t/cG5nX3NlZWtsb2dv/LTI1NjAxMC5wbmc",
    posted: "4 days ago",
    title: "UX Researcher",
    type: "Full-Time",
    level: "Senior-Level",
    salary: "$125/hr",
    location: "Stockholm, Sweden",
  },
  {
    company: "Meta",
    logo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    posted: "2 days ago",
    title: "Full Stack Developer",
    type: "Full-Time",
    level: "Lead",
    salary: "$140/hr",
    location: "Menlo Park, USA",
  },
  {
    company: "Apple",
    logo: "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    posted: "2 weeks ago",
    title: "iOS Developer",
    type: "Full-Time",
    level: "Mid-Level",
    salary: "$135/hr",
    location: "California, USA",
  },
  {
    company: "Tesla",
    logo: "https://imgs.search.brave.com/ishIP3wcqrPzaSwfc-NsgIvXMOZKOjWAG9LvBwhRYFA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdiLzgw/L2IzLzdiODBiMzI3/Njg2NmYyMjU4YjU3/MGFhNmMwN2U1NGNh/LmpwZw",
    posted: "5 days ago",
    title: "Software Engineer",
    type: "Remote",
    level: "Senior-Level",
    salary: "$145/hr",
    location: "Austin, USA",
  },
  {
    company: "Airbnb",
    logo: "https://imgs.search.brave.com/yyug71OkbQF5cxqbjap3yrSPzDLi5r-HjvNAXGZcpZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n",
    posted: "1 week ago",
    title: "Frontend Engineer",
    type: "Hybrid",
    level: "Mid-Level",
    salary: "$115/hr",
    location: "San Francisco, USA",
  },
];
  
  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        return <div key={idx}>
          <Card company = {elem.company} logo = {elem.logo} posted = {elem.posted} title = {elem.title} type = {elem.type} level = {elem.level} salary = {elem.salary} location = {elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
