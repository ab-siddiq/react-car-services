import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';




const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, err] = useUpdateProfile(auth);
    console.log(user);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = await e.target.name.value;
        const phone = await e.target.phone.value;
        const email = await e.target.email.value;
        const password = await e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, ' ', phone, ' ', email, ' ', password, ' ', confirmPassword)
        createUserWithEmailAndPassword(email, password);
        await updateProfile(name, phone, email, password);
    }
    const handleNavigate = e =>{
        navigate('/login');
        
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2>Please login!!!</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" name="name" placeholder="Enter name" />
                    {/* <Form.Text className="text-muted">
                        Enter a valid name
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control ref={phoneRef} type="text" name="phone" placeholder="Enter number" />
                    {/* <Form.Text className="text-muted">
                        Enter a valid number.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" name="confirmPassword" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className=''>Already have an account? <Link className='text-danger text-decoration-none' to='/login'  onClick={handleNavigate}>Please login.</Link></p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;