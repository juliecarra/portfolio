// import React, { useState } from "react";
// import "./Contact.scss";

// export default function Contact() {
//   const [mailInfo, setmailInfo] = useState({
//     email: "",
//     name: "",
//     message: ""
//   });
//   const [mailSent, setMailSent] = useState(false);
//   function handleEmail(e) {
//     e.preventDefault();
//     fetch("/.netlify/functions/mail", {
//       method: "POST",
//       body: JSON.stringify(mailInfo)
//     })
//       .then(response => {
//         return "email sent";
//       })
//       .then(res => setMailSent(!mailSent));
//   }

//   function handleMailChange(e) {
//     const value = e.target.value;
//     const name = e.target.name;
//     setmailInfo({ ...mailInfo, [name]: value });
//   }

//   return (
//     <div className="contact_page">
//       <section id="contact">
//         <h1 class="section-header">CONTACT</h1>
//         <div class="contact-wrapper">
//           <form className="form-horizontal">
//             <div class="form-group">
//               <div class="col-sm-12">
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="name"
//                   placeholder="name"
//                   name="name"
//                   value={mailInfo.name}
//                   onChange={handleMailChange}
//                 />
//               </div>
//             </div>

//             <div class="form-group">
//               <div class="col-sm-12">
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="email"
//                   placeholder="email"
//                   name="email"
//                   value={mailInfo.email}
//                   onChange={handleMailChange}
//                 />
//               </div>
//             </div>

//             <textarea
//               class="form-control"
//               rows="10"
//               placeholder="your message to me"
//               name="message"
//               value={mailInfo.message}
//               onChange={handleMailChange}
//             ></textarea>
//             <button
//               class="btn btn-primary send-button"
//               id="submit"
//               type="submit"
//               value="SEND"
//               onClick={handleEmail}
//               style={{ backgroundColor: "#fac508", borderColor: "#fac508" }}
//             >
//               <div class="button">
//                 <i class="fa fa-paper-plane"></i>
//                 <span class="send-text">SEND</span>
//               </div>
//             </button>
//           </form>

//           <div class="direct-contact-container">
//             <ul class="contact-list">
//               <li class="list-item">
//                 <i class="fa fa-map-marker fa-2x">
//                   <span class="contact-text place">Paris | FRA</span>
//                 </i>
//               </li>

//               <li class="list-item">
//                 <i class="fa fa-phone fa-2x">
//                   <span class="contact-text phone">
//                     <a href="tel:1-212-555-5555" title="Give me a call">
//                       +32 471 93 08 14
//                     </a>
//                   </span>
//                 </i>
//               </li>

//               <li class="list-item">
//                 <i class="fa fa-envelope fa-2x">
//                   <span class="contact-text gmail">
//                     <a href="mailto:#" title="Send me an email">
//                       henri.dbel@gmail.com
//                     </a>
//                   </span>
//                 </i>
//               </li>
//             </ul>

//             <hr />
//             <ul class="social-media-list">
//               <li>
//                 <a
//                   href="https://github.com/belke05"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   class="contact-icon"
//                 >
//                   <i className="fab fa-github" aria-hidden="true"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.linkedin.com/in/henri-de-bel/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="contact-icon"
//                 >
//                   <i className="fab fa-linkedin" aria-hidden="true"></i>
//                 </a>
//               </li>
//             </ul>
//             <hr />

//             <div className="copyright">
//               &copy; made with <span role="img">&#x1F49B;</span> by Julie
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Contact.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = async e => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/mail", {
        method: "POST",
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        //not 200 response
        return "fail";
      }
      setFormState({
        name: "",
        email: "",
        message: ""
      });
      //all OK
    } catch (e) {
      //error
      console.log(e);
    }
  };

  return (
    <div className="Contact" id="contacts">
      <h1>Contact</h1>
      <section id="contact">
        <div class="contact-wrapper">
          {/* <form class="form-horizontal" onSubmit={submitForm}>
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value={formState.name}
                  onChange={onChange}
                />
              </div>
            </div>
            <br />
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={formState.email}
                  onChange={onChange}
                />
              </div>
            </div>
            <br />
            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={formState.message}
              onChange={onChange}
            ></textarea>

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="button">
                <i class="fab fa-telegram-plane plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form> */}

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">Paris | FR</span>
                </i>
              </li>

              <li class="list-item">
                {" "}
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="#" title="">
                      +33 6 67 62 89 32
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a
                      href="mailto:julie.carra@live.fr"
                      title="Send me an email"
                    >
                      julie.carra@live.fr
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <div class="social-container">
              <ul class="social-icons">
                <li>
                  <a href="https://github.com/juliecarra">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/juliecarra">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />

            <div class="copyright">
              &copy; Made with <span role="img">💙</span> by Julie Carra
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
