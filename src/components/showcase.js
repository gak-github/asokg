import React from 'react';
import ProfilePic from '../images/Ashok.jpeg';

const ShowcaseContent = () => {
    return (
        <div className="showcase">
            <div>
                <img src={ProfilePic} alt='profile' />
                <p className="my-1">
                    I am an Engineering Manager in Software Development with 16+ years of experience in financial services and
                    e-commerce. I am married, and I have 2 children.
                    My passions include running and learning something new every
                    day whether it be related to coding or not.
                    Perseverance is one of my assets because whatever I do,
                    I do it from the bottom of my heart.
                    My goal for every day is to be smarter than the day before.
                    One cannot escape from his/her duties no matter what, so I take it into my
                    hands to follow through on my responsibilities as diligently as possible.
                    The human body is a tool used to execute its tasks in this life;
                    it will be sharper and grow stronger with increased use.
                    The only way to live life to the fullest is by coming to terms with this idea.
              </p>
            </div>
        </div>
    );
};

export default ShowcaseContent;