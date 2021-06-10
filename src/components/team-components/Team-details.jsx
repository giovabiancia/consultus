import React from 'react';
import SingleMemberInfo from './SingleMember';
import { sectionData } from './../../data/section.json';
import { useAuthentication } from '../../hooks/useAuthentication';

const TeamDetailsInner = () => {
    let data = sectionData.teamDetails;
    const auth = useAuthentication()
    return (
        <>
                {/* <!-- start team details area --> */}
    <section className="team-detail pt-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <SingleMemberInfo />
                </div>

                <div className="col-lg-8">

                    <div className="team-inner ">
                        <div className="single-item " >
                            <div className="item-title">
                                <h4>caio</h4>
                            </div>
                            <p>
                                {data.aboutInfo.content}
                            </p>
                            <p>
                            {data.aboutInfo.content2}
                            </p>
                            <p>{data.aboutInfo.content3}
                            </p>
                        </div>
                        <div className="single-item mt-30 " >
                            <div className="item-title">
                                <h4>{data.timeiInfo.title}</h4>
                            </div>
                            <table className="table table-responsive" style={{width: "100%"}}>
                                <thead>
                                    <tr>
                                        <th scope="col" style={{width: "50%"}}>
                                            <p>day</p>
                                        </th>
                                        <th scope="col" style={{width: "50%"}}>
                                            <p>time</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.timeiInfo.singleTime.map((item, i)=>{
                                        return (
                                            <tr key={i}>
                                        <td>
                                            <p>{item.dayName}</p>
                                        </td>
                                        <td>
                                            <p>{item.dayTime}</p>
                                        </td>
                                    </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="single-item mt-30 ">
                            <div className="item-title">
                                <h4>experience</h4>
                            </div>
                            <table className="table table-responsive" style={{width: "100%"}}>
                                <thead>
                                    <tr>
                                        <th scope="col" style={{width: "25%"}}>
                                            <p>year</p>
                                        </th>
                                        <th scope="col" style={{width: "30%"}}>
                                            <p>department</p>
                                        </th>
                                        <th scope="col" style={{width: "25%"}}>
                                            <p>position</p>
                                        </th>
                                        <th scope="col" style={{width: "20%"}}>
                                            <p>company</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.experienceInfo.singleExp.map((item, i)=>{
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <p>{item.year}</p>
                                                </td>
                                                <td>
                                                    <p>{item.department}</p>
                                                </td>
                                                <td>
                                                    <p>{item.position}</p>
                                                </td>
                                                <td>
                                                    <p>{item.company}</p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end team details area --> */}

        </>
    );
}

export default TeamDetailsInner;
