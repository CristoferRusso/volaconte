import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import '../style/style.css';
import '../style/animate.css';
import 'react-toastify/dist/ReactToastify.css'

class ContactForm extends React.Component {

    render() {
        return (

            <section className="ftco-section ">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <div className="contact-wrap w-100 p-lg-5 p-4 text-muted text-lg-start">
                                            <h3 className="mb-4">Send us a message</h3>
                                            <form id="contactForm" name="contactForm" className="contactForm" onSubmit={this.sendEmail}>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                id="name"
                                                                label="Name"
                                                                name="name"
                                                                autoComplete="given-name"
                                                                autoFocus
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                type="email"
                                                                id="email"
                                                                label="Email"
                                                                name="email"
                                                                autoComplete="email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                id="subject"
                                                                label="Subject"
                                                                name="subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <Grid item xs={16} sm={12}>
                                                                <TextField
                                                                    required
                                                                    fullWidth
                                                                    id="message"
                                                                    label="Message"
                                                                    name="message"

                                                                    inputProps={{
                                                                        style: {
                                                                            height: "200px",
                                                                        },

                                                                    }}
                                                                />
                                                            </Grid>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <Button
                                                                type="submit"
                                                                fullWidth
                                                                color="secondary"
                                                                variant="contained"
                                                                sx={{ mt: 3, mb: 2 }}
                                                            >
                                                                Send
                                                            </Button>
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch">
                                        <div className="info-wrap w-100 p-lg-5 p-4 img">
                                            <h3>Contact us</h3>
                                            <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <div className="dbox w-100 d-flex align-items-start">                                             
                                                <div className="text pl-3">
                                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="text pl-3">
                                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="text pl-3">
                                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="text pl-3">
                                                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )

    };

    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_9p3tcax", "template_whm38qr", e.target, "bVTXbSRzIiymzhjzY")
            .then((result) => {
                toast.success("Email sended");
                console.log(result.text);
            }, (error) => {
                toast.error("Error");
                console.log(error.text);
            });
        e.target.reset()
    }



}




export default ContactForm;