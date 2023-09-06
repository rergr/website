import React, {useEffect, useState} from 'react';
import data from '../data'
import Bwd from './PDFs/bwd.pdf'
import Gibb from './PDFs/gibb.pdf'
import Bbc from './PDFs/bbc.pdf'
import Tf from './PDFs/tf_cert.pdf'
import {FaDownload} from 'react-icons/fa'


const Documents = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setLogged] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const gibb = data.gibb
    const bwd = data.bwd
    const bbc = data.bbc


    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const renderCourses = (courses) => {
        return Object.keys(courses).map(courseId => {
            const course = courses[courseId];
            return (
                <Grade subject={course.name} grade={course.grade} semester={course.semester}/>
            );
        });
    };

    const halfIndex = Math.ceil(Object.keys(gibb).length / 3);

    useEffect(() => {
        if (errorMessage) {
            const shakeTimeout = setTimeout(() => {
                setErrorMessage(false);
            }, 500); // Adjust the timeout duration as needed

            return () => clearTimeout(shakeTimeout);
        }
    }, [errorMessage]);


    const handleLogin = () => {
        console.log(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD, username, password)

        if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
            setLogged(true);
        }
        else{
            setErrorMessage(true)
        }
    };

    const pdfs = [
        Bwd,
        Gibb,
        Bbc,
        Tf,
    ]

    const pdf_names = [
        "Bwd_noten",
        "Gibb_noten",
        "Bbc_noten",
        "TensorFlow_cert"
    ]


    const handleDownload = () => {
        for (let i = 0; i < pdfs.length; i++) {
            fetch(pdfs[i]).then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = pdf_names[i];
                    alink.click();
                })
            })
        }
    }

    return (
        <>
            {!isLogged && (
                <div className="flex justify-center items-center h-screen w-screen pt-32 pb-44">
                    <div className={`w-96 flex flex-col p-6 rounded bg-[#000000] shadow-md ${errorMessage ? 'shake' : ''}`}>
                        <p className="text-[#00db00] p-4">[~]$ Login</p>
                        <input
                            autoFocus
                            className={`bg-[#000000] text-white mb-2 focus:outline-none p-4 ${errorMessage ? 'shake-input' : ''}`}
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleLogin();
                                }
                            }}
                        />
                        <input
                            className="bg-[#000000] text-white mb-2 focus:outline-none p-4"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleLogin();
                                }
                            }}
                        />
                        <button
                            className="bg-[#000000] text-white mb-2 focus:outline-none p-4"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>

            )}
            {isLogged && (
                <>
                    <div className="md:flex hidden flex-col justify-start items-center min-h-max mt-44">
                        <div className="grid sm:grid-cols-3 w-full h-full gap-16 p-4">
                            <div>
                                <h2 className="text-2xl text-center">GIBB (Gewerbeschule Bern)</h2>
                                {showMore ? renderCourses(gibb) : renderCourses(gibb).slice(0, halfIndex)}
                            </div>
                            <div className="">
                                <h2 className="text-2xl text-center">Bbc (Berufs bildungs center Bern)</h2>
                                {showMore ? renderCourses(bbc) : renderCourses(bbc).slice(0, halfIndex)}
                            </div>
                            <div className="">
                                <h2 className="text-2xl text-center">bwd (Bildungszentrum für Wirtschaft und Dienstleistung)</h2>
                                {showMore ? renderCourses(bwd) : renderCourses(bwd).slice(0, halfIndex)}
                            </div>
                        </div>
                        {Object.keys(gibb).length > halfIndex && (
                            <button onClick={toggleShowMore} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                                {showMore ? 'Show Less' : 'Show All'}
                            </button>
                        )}
                    </div>
                    <div className="flex justify-center pt-5">
                        <h1 className="text-3xl px-7 items-center">Download all</h1>
                        <button onClick={handleDownload}>
                            <FaDownload size={32}/>
                        </button>
                    </div>
                    <div className="flex md:flex-row flex-col justify-center h-auto w-screen p-12 gap-32 mb-36">
                        <div className="flex flex-col justify-center h-full p-5">
                            <p className="text-3xl font-semibold pr-4 text-center p-5">SCHOOL </p>
                            <a href={Bwd} target="_blank" rel="noreferrer" className="text-2xl font-semibold pr-4 text-center p-5">Read full BWD Report Card</a>
                            <a href={Gibb} target="_blank" rel="noreferrer" className="text-2xl font-semibold pr-4 text-center p-5">Read full Gibb Report Card</a>
                            <a href={Bbc} target="_blank" rel="noreferrer" className="text-2xl font-semibold pr-4 text-center p-5">Read full Bbc Report Card</a>

                        </div>

                        <div className="flex flex-col justify-center h-full p-5">
                            <p className="text-3xl font-semibold pr-4 text-center p-5" >Diplomas </p>
                            <a href={Tf} target="_blank" rel="noreferrer" className="text-2xl font-semibold pr-4 text-center p-5 ">Check out my Tensorflow Diplomas</a>
                            <p className="text-2xl font-semibold pr-4 text-center p-5">Check out my Abacus Diplomas</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

const Grade = ({subject, grade, semester}) => {

    const percent = (grade/6) * 100;

    return(
        <div className="flex flex-col p-4 text-xl">
            <h2 className="p-2">{subject}</h2>
            <h2 className="p-2 text-2xl">Grade: {grade}</h2>
            <div className="bg-white md:h-5 h-2 w-full rounded-2xl">
                <div className="h-full bg-blue rounded-2xl" style={{ width: `${percent}%` }}>
                </div>
            </div>
        </div>
    );
}


export default Documents;
