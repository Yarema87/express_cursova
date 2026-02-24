'use client';
import DefaultComplexes from "../components/other/default_complexes";
import Link from "next/link";

function Programs() {
    return(
        <div className="container">
            <div className="profile-card">
                <DefaultComplexes />
                <Link href='/'><button className="button">Back to main</button></Link>
            </div>
        </div>
    )
}

export default Programs;