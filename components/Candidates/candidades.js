import React from 'react'
import styles from "../Candidates/Candidates.module.css"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function candidades() {

let showMe = false;
  function toggle(){
      showMe = !showMe;
    
  }

  return (
    <>
     <header className={styles.candidatesHeader}>
        <div className={styles.container}>
            <div className={styles.title}>
            <h1 className={styles.h1}>Get Career Advice, Interview Tips and Build Your Resume</h1>
            <p className={styles.p}>A guide to help you find a job, get a better cv and work from home efficiently</p>
            </div>
        </div>
    </header>
 <section>
        <div className={styles.btnsRecruiting}>
            <div className={styles.btns} onClick={toggle}>
                <p>Career Advice</p>
            </div>
            <div className={styles.btns2} onClick={toggle}>
                <p>Interview Tips</p>
            </div>
            <div className={styles.btns3} onClick={toggle}>
                <p>CV Advice</p>
            </div>
        </div>
              {/* <!-- ,styles.tab one --> */}
        <section className={styles.tabOne}>
        <div className={styles.whole}>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/pic1.jpg" alt="People Recruiting"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>Work from home: our best tips</h3>
                <p className={styles.down}>We have been talking about it for years and it only took a global pandemic to make working from home (WFM) the new standard within a few weeks.</p>
                <p className={styles.down}>From the self-employed to employees of all levels, by choice or not, everyone has been forced to work from home (WFH). Thus, 88% of companies worldwide have imposed or encouraged their employees to work from home since the beginning of the COVID-19 pandemic...</p>
                <div className={styles.btnPage}>
                    <a href="/work-from-home">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection, styles.two}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/pic2.jpg" alt="People Interview"/>
            </div>
            <div className={styles.sideText,styles.picCandidates}>
                <h3 className={styles.h3}>Succeed in your Skype interview</h3>
                <p className={styles.down}>In today’s global workplace, many employers opt to use Skype to interview candidates. This type of interview cuts down on travel expenses. It also enables employers to quickly and easily recruit international top talent.</p>
                <p className={styles.down}>Moreover, with the rise of remote workers around the world, meeting over Skype has become the norm for professionals when communicating with their team as well as their clients.</p>
                <div className={styles.btnPage2}>
                    <a href="/skype-interview">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/pic3.jpg" alt="People Recruiting"/>
            </div>
            <div className={styles.sideText,styles.picCandidates}>
                <h3 className={styles.h3}>Tips for keeping the Job you have</h3>
                <p className={styles.down}>We have been talking about it for years and it only took a global pandemic to make working from home (WFM) the new standard within a few weeks.</p>
                <p className={styles.down}>From the self-employed to employees of all levels, by choice or not, everyone has been forced to work from home (WFH). Thus, 88% of companies worldwide have imposed or encouraged their employees to work from home since the beginning of the COVID-19 pandemic...</p>
                <div className={styles.btnPage}>
                    <a href="/keep-your-job">read more</a>
                </div>
            </div>
        </div>
                  </div>
                  </section>
        {/* <!-- ,styles.tab two --> */}
        <section className={styles.tabTwo}>
        <div className={styles.whole}>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/interview-tip.jpg" alt="Job interview"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>Job interview: Strengths & Weaknesses</h3>
                <p className={styles.down}>During a job interview, the recruiter may ask you this famous question: “Tell me 3 of your strengths and 3 of your weaknesses“. This question (with multiple variations) can be challenging, however, it is a good way of earning points with your recruiter. With a little training and preparation it is easy to make a good impression.</p>
                <p className={styles.down}>Firstly, here is a bit of advice on how to best answer the question...</p>
                <div className={styles.btnPage}>
                    <a href="/job-interview">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection, styles.two}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/prepare.jpg" alt="Job interview"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>How do I prepare for a job interview?</h3>
                <p className={styles.down}>You are certain to be asked specific questions about the company you are interviewing with. The interviewer will appreciate that you have made an effort to research their company. It will also show that you are motivated about the role.</p>
                <p className={styles.down}>You can do a search online by checking the company through a search engine. You should also check the website, careers website, blogs and social media of the company. Finally review articles in the press.</p>
                <div className={styles.btnPage2}>
                <a href="/interview-prepare">read more</a>

                </div>
            </div>
        </div>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/interview.jpg" alt="Job interview"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>The most common questions asked in interview</h3>
                <p className={styles.down}>Anticipating the type of questions you could be asked in an interview is absolutely vital. In this article, we are going to reveal what your interviewer really wants to know when asking certain questions.The goal is to personalise and adapt your responses to the position and the company’s culture in order to stand out.</p>
                <p className={styles.down}>Here is a list of the most common questions asked in interviews and guidelines on how to answer them...</p>
                <div className={styles.btnPage}>
                   <a href="/interview">read more</a>
                </div>
            </div>
        </div>
        </div>
        </section>
        {/* <!-- ,styles.tab three --> */}
        <section className={styles.tabThree}>
        <div className={styles.whole}>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/cv-mistakes.jpg" alt="CV Mistakes"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>6 common CV mistakes to avoid</h3>
                <p className={styles.down}>Many skilled candidates miss out on career opportunities because of minor mistakes they have made when writing CVs. Keep in mind, that:</p>
                <p className={styles.down}>your CV provides the first impression for prospective employers there is only a 17% chance that your cover letter will be read Knowing this, it is vital that, when writing yours, you get it right. If your resume contains several common mistakes, you will have less success in being shortlisted by recruiters for interviews.</p>
                <div className={styles.btnPage}>
                    <a href="/cv-mistakes">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection, styles.two}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/resume.jpg" alt="My resume"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>How do you write a winning CV?</h3>
                <p className={styles.down}>Your CV is a personal marketing document used to sell yourself to prospective employers who have never met you.Consider yourself as the product and your CV as the advertisement. The goal of writing a winning CV is to stand out from the crowd and catch the eye of your potential employers.</p>
                <p className={styles.down}>At a glance, the recruiter or the manager should be able to understand the...</p>
                <div className={styles.btnPage2}>
                    <a href="/write-a-winning-cv">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/success.jpg" alt="Success CV"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>10 Steps to a successful CV</h3>
                <p className={styles.down}>Writing a good CV can be one of the toughest challenges of job hunting. Most employers spend just a few seconds scanning each CV before sticking it in the 'Yes' or 'No' pile. Here are the top 10 tips for writing a CV that'll secure the all-important interview.</p>
                <p className={styles.down}>1. Keep it real! Usually a CV should be no more than two pages...</p>
                <div className={styles.btnPage}>
                    <a href="/successfull-cv">read more</a>
                </div>
            </div>
        </div>
                  </div>
                  </section>
        {/* <!-- pages --> */}
        <div className={styles.pages}>
            {/* <p>1</p>
            <p>2</p>
            <p>3</p>
            <i><ChevronRightIcon /> </i> */}
        </div>
    </section>
  </>
  )
}
