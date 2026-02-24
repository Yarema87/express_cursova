'use client';

import Link from "next/link";

function PremiumPage(){
    return(
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    <div className="profile-card">
                        <ul>
                            <h3>Get premium access</h3>
                            <li>💪 Create and customize your own workout complexes</li>
                            <li>🎧 Access exclusive music for motivation</li>
                            <li>Detailed statistics of your progress</li>
                        </ul>
                        <h5>Only for 6.99$ per month</h5>
                        <button className="button">Subscribe</button>
                    </div>
                    <Link href='/'><button className="button">Back to main</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PremiumPage;