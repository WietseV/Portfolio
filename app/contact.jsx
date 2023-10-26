'use client'

import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail, AiOutlineCopyright } from 'react-icons/ai'
import { useState } from 'react'

/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) {
    return new Promise(function (n, e) { 
        a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
        var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) 
        }) 
    }, ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
            var e = a.responseText; null != t && t(e) }, a.send(n) 
    }, ajax: function (e, n) { 
        var t = Email.createCORSRequest("GET", e); t.onload = function () {
                var e = t.responseText; null != n && n(e) }, t.send() 
    }, createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t 
    } 
};

export default function Contact() {

    const [result, setResult] = useState('');
    const sender = "<b>Sender:</b> "
    const messageInBody = " <b>Message:</b> <br/> <br/>"

    function Send(e)  {
        e.preventDefault();
        Email.send({
            SecureToken : "1857c947-763d-42f5-bfd5-231fb3f70e2d",
            To : 'wietse.vandeput@hotmail.com',
            From : 'wietse.vandeput@hotmail.com',
            Subject : document.getElementById('subject')?.value,
            Body : sender + document.getElementById('email')?.value + "<br/><br/>" + messageInBody + document.getElementById('message')?.value,
            IsBodyHtml : true
        }).then(
          message => {setResult(message); document.getElementById('form')?.reset()}
        );
    }

    return (
        // Contact section
        <section id="contact" className="min-h-screen bg-primary__gray snap-always snap-start relative">
            <div className="md:max-w-[80%] xl:max-w-6xl w-full mx-auto flex flex-col md:flex-row md:justify-between pt-16">
                <h2 className="md:hidden text-primary__white font-sulphur text-2xl px-4 text-right">Contact<span className="pl-2 text-primary__pink">Me</span></h2>
                <form id='form' onSubmit={(e) => Send(e)} className="flex flex-col gap-2 xl:w-[75%] pt-8 md:pt-16 px-4 font-sulphur">
                    <div className="flex gap-2">
                        <input id="name" type="text" placeholder="Name" className="px-4 py-2 rounded-tl-lg w-[50%] bg-primary__white bg-opacity-80 motion-safe:hover:bg-opacity-90 focus:bg-opacity-90
                         outline-none placeholder:text-primary__gray" required />
                        <input id="email" type="email" placeholder="Email" className="px-4 py-2 rounded-tr-lg w-[50%] bg-primary__white bg-opacity-80 motion-safe:hover:bg-opacity-90 focus:bg-opacity-90
                         outline-none placeholder:text-primary__gray" required/>
                    </div>
                    <input id="subject" type="text" placeholder="Subject" className="px-4 py-2 bg-primary__white bg-opacity-80 motion-safe:hover:bg-opacity-90 focus:bg-opacity-90
                         outline-none placeholder:text-primary__gray" required/>
                    <textarea id="message" placeholder="Message" className="min-h-[160px] px-4 py-2 rounded-b-lg bg-primary__white bg-opacity-80 motion-safe:hover:bg-opacity-90 focus:bg-opacity-90
                         outline-none placeholder:text-primary__gray" required/>
                    <div>
                        {result === '' && <h1></h1> || result === 'OK' && <h1 className='text-green-300'>The mail was succesfully send, I`ll be in touch soon.</h1> 
                        || <h1 className='text-red-500'>There was a problem sending the mail. Please try again later.</h1>}
                    </div>
                    <div className="w-full flex jusitfy-between">
                        <button type="submit" 
                        className="px-4 py-2 border-2 border-primary__white bg-opacity-80 text-primary__white relative z-10 rounded-md before:bg-buttons before:bg-left-top 
                        before:absolute before:inset-0 before:w-full motion-safe:hover:before:bg-right-bottom before:transition-[background-position]
                        before:duration-200 before:ease-linear motion-safe:hover:text-[#1E1E1E] before:z-[-1] transition-[color] duration-100 ease-linear">
                            Send
                        </button>
                        <div className='w-full flex text-primary__white text-4xl gap-2 justify-end items-end'>
                            <a href='https://github.com/WietseV' 
                            target="_blank" rel="noreferrer noopener" className='motion-safe:hover:-translate-y-1 transition-all duration-75 ease-in'>
                                <AiOutlineGithub />
                            </a>
                            <a href='https://www.linkedin.com/in/wietse-vandeput-99ab87159/' 
                            target="_blank" rel="noreferrer noopener" className='motion-safe:hover:-translate-y-1 duration-75 ease-in'>
                                <AiFillLinkedin />
                            </a>
                            <a href="mailto:wietse.vandeput@hotmail.com"
                            className='motion-safe:hover:-translate-y-1 transition-all duration-75 ease-in'>
                                <AiOutlineMail />
                            </a>
                        </div>
                    </div>
                </form>
                <h2 className="hidden md:flex text-primary__white font-sulphur text-6xl flex-col text-center px-2">
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span className="pl-8 md:pt-8 md:pl-0 text-primary__pink">M</span>
                    <span className="text-primary__pink">e</span>
                </h2>
            </div>
            <div className="md:max-w-[80%] xl:max-w-6xl w-full mx-auto flex justify-center items-center pt-8 md:pt-16 px-4">
                <h1 className="text-xl md:text-2xl text-primary__white text-center md:text-right">
                    I am currently looking for new opportunities so don`t hesitate to contact me. <br/>
                    Let`s build something <span className='beautiful bg-clip-text text-transparent'>beautiful</span> together!
                </h1>
            </div>
            <div className='flex items-center text-primary__white gap-1 absolute bottom-2 left-4 text-sm'>
                <p>Copyright 2023</p> 
                <AiOutlineCopyright/> 
                <p>All rights reserved - Wietse Vandeput</p> 
            </div>
        </section>
    )
}