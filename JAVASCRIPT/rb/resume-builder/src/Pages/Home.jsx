import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Landing page */}
      <div
        style={{
          height: "100vh", backgroundImage: 'url("/landing.png")', backgroundSize: "cover", backgroundAttachment: "fixed",
        }}
        className="d-flex justify-content-center align-items-center" >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          className="w-50 p-5 rounded text-center" >
          <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All
            In One. </h1>

          <Link to="/steps" className="btn btn-dark mt-3" >
            Make Your Resume With AI  </Link>
        </div>
      </div>

      {/* about */}
      <div className="container my-5">
        <h1 className="text-center mb-5">What's AI rBuilder</h1>
        <div className="row allign -items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5"><p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img width={"100%"} height={'550px'} src="/resume.png" alt="resume" />
          </div>
        </div>
        </div>
        {/* {banner} */}
        <div style={{height:'80vh',backgroundImage:'url("/team.png")', backgroundSize:'cover',
          backgroundPosition:'center',backgroundAttachment:'fixed'
        }}></div>
        {/* {testimony} */}
         <div className="container my-5">
        <h1 className="text-center mb-5">Testimony</h1>
        <div className="row allign -items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Trusted By Professionals Worldwide</h5><br></br>
            <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
              <div className="col-md-3">
                <img  className='img-fluid p-2' src="https://imgs.search.brave.com/LvmaJg386tkodOT2yx5xBPO7NG15RPm_Tu-uCwoOsSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODMzMzEzMC9waG90/by9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/c21pbGluZy1pbi1h/LWNhc3VhbC1zdWl0/LWFuZC1nbGFzc2Vz/LWluZG9vcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTU1/WFRlMGI0SGZrSmZx/X3lxX2tzbmw5eFlX/S1JVQ2dtUE1kd2Nz/c1dPTDA9" alt="user" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
      )
}

      export default Home;