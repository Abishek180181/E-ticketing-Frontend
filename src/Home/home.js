
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap'
import home_image from '../assets/new_home.png'
import logo from '../assets/home_image.png'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import logo_ca from '../assets/logo/merocare.png'
import buyticekt from '../assets/buyticekt.png'
import payment from '../assets/payment.png'
import searchhospital from '../assets/searchhospital.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

function simulateNetworkRequest() {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Home = (props) => {
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			simulateNetworkRequest().then(() => {
				setLoading(false);
			});
		}
	}, [isLoading]);

	const handleClick = () => setLoading(true);

	Aos.init({
		duration: 2000
	})

	return (
		<>
			<Container fluid className="home__background" id="home">

				<Row>
					<Col lg={1}></Col>
					<Col lg={4} className="pt-5" data-aos="flip-right">
						<h2 className="heading__top">Buy a ticket</h2>
						<h2 className="heading__top">Online</h2>
						<p className="pt-5 heading_para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
							sed diam nonumy eirmod tempor invidunt ut labore et
							dolore magna aliquyam erat, sed diam voluptua. At
							vero eos.</p>
						<Link to="#" className="btn btn-learn">Learn More</Link>
					</Col>

					<Col>
						<img src={home_image} className="w-100 py-5" data-aos="fade-right"></img>
					</Col>


				</Row>

			</Container>
			<Container id="about" data-aos="fade-up">
				<Row>
					<Col lg={12} sm={12} className='pt-5 text-center'>
						<h2 className="heading__1">Welcome to E-ticketing and Consultation</h2>
					</Col>
					<div className="mt-5"></div>
					<Col lg={6} md={6} sm={12}>
						<img src={logo} alt="merocare" className="w-100" />
					</Col>
					<Col lg={6} md={6} sm={12} className="py-5">
						<p className="heading__3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
							justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
							sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
							duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							amet.</p>
					</Col>

				</Row>

			</Container>
			<Container className="pt-5" data-aos="zoom-in">
				<Row>
					<Col lg={12} sm={12} className='pt-5 text-center'>
						<h2 className="heading__1 pb-3 ">Services</h2>
					</Col>
					<Col lg={4} md={4} sm={12} className="pb-2" data-aos="flip-right">
						<Card>
							<Card.Img variant="top" src={searchhospital} className="mx-auto py-2" style={{ height: "322px" }} />
							<Card.Body>
								<Card.Title className="dominefont">Find Hospital</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4} md={4} sm={12} className="pb-2" data-aos="zoom-in">
						<Card>
							<Card.Img variant="top" src={buyticekt} className="mx-auto py-2" style={{ height: "322px" }} />
							<Card.Body>
								<Card.Title className="dominefont">Buy Ticket</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4} md={4} sm={12} className="pb-2" data-aos="zoom-in">
						<Card>
							<Card.Img variant="top" src={payment} className="mx-auto py-2 w-75" style={{ height: "322px" }} />
							<Card.Body>
								<Card.Title className="dominefont">Instant Payment</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

				</Row>
			</Container>
			<Container>
				<Row>
					<Col lg={12} sm={12} className='pt-5 text-center'>
						<h2 className="heading__1">Our Partner Hospitals and Clinics</h2>
					</Col>
				</Row>
				<OwlCarousel className='owl-theme owl-loading' touchDrag={false} pullDrag={false} autoplay items="5" loop margin={10} dots={false}>
					<div class='item'>
						<img src={logo_ca} alt="hospitalname" className="carousel-image" />
					</div>
					<div class='item'>
						<h4>2</h4>
					</div>
					<div class='item'>
						<h4>3</h4>
					</div>
					<div class='item'>
						<h4>4</h4>
					</div>
					<div class='item'>
						<h4>5</h4>
					</div>
					<div class='item'>
						<h4>6</h4>
					</div>
					<div class='item'>
						<h4>7</h4>
					</div>
					<div class='item'>
						<h4>8</h4>
					</div>
					<div class='item'>
						<h4>9</h4>
					</div>
					<div class='item'>
						<h4>10</h4>
					</div>
					<div class='item'>
						<h4>11</h4>
					</div>
					<div class='item'>
						<h4>12</h4>
					</div>
				</OwlCarousel>

			</Container>
			<Container className="contact__container" fluid id="contact" data-aos="fade-up-right">
				<Container className="contact__wrapper">
					<Row>
						<Col lg={5} sm={12} md={5} className="contact-text" data-aos="flip-down" data-aos-duration="3000">
							<h3>Get in Touch</h3>
							<div className="border-line mb-5 d-flex"></div>
							<p>Contact us through this form to discover how Teladoc Health can
								add value to your organization, or call us at 1-844-798-3810.</p>
							<div className="contact__icons mb-3 mt-5">
								<ul className="list-group">
									<li className="list-group-item"><span><i class="fas fa-phone"></i> +977- 1-1234567</span> </li>
									<li className="list-group-item"><span><i class="fas fa-globe"></i>example@techinnovate.com.np</span> </li>
									<li className="list-group-item"><span><i class="fas fa-map-marker-alt"></i> Bhanubhakta Marg, Kathmandu,
										Nepal</span> </li>
								</ul>
							</div>
						</Col>
						<Col lg={7} sm={12} md={7}>
							<Form className="contact__form" data-aos="zoom-in-left" data-aos-duration="3000">
								<Row className="mb-3">
									<Form.Group className="col-lg-6 col-sm-12" controlId="formGridFirst">
										<Form.Label>First Name</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group className="col-lg-6 col-sm-12" controlId="formGridSecond">
										<Form.Label>last Name</Form.Label>
										<Form.Control type="text" />
									</Form.Group>
								</Row>

								<Row>
									<Form.Group className="mb-3 col-lg-6 col-sm-12" controlId="formGridAddress1">
										<Form.Label>Address</Form.Label>
										<Form.Control type="text" />
									</Form.Group>
									<Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
										<Form.Label>Contact Number</Form.Label>
										<Form.Control type="text" />
									</Form.Group>
								</Row>

								<Form.Group className="mb-3" controlId="formGridAddress2">
									<Form.Label>Email Address</Form.Label>
									<Form.Control type="email" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formGridAddress2">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={6} />
								</Form.Group>
								<div className="text-center">
									<Button className="btn-submit justify-content-center" disabled={isLoading}
										onClick={!isLoading ? handleClick : null}
									>
										{isLoading ? 'Submitting…' : 'Submit'}</Button>
								</div>
							</Form>

						</Col>
					</Row>
				</Container>
			</Container>

		</>
	)
}

export default Home

