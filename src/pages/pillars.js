import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import pilars1 from '../images/pillars1.png'
import pilars2 from '../images/pillars2.png'
import pilars3 from '../images/pillars3.png'


const PllarsPage = () => {
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);

    if (show) {
        return (
            <Layout>
                <div className="pop_up">
                    <div className="icon">
                        <box-icon style={{cursor: 'pointer'}} onClick={() => setShow(false)} color='#8067AD' name='x'></box-icon>
                    </div>
                    <div className="line" />
                    <h5 className="event text-center py-2">Civic Education</h5>
                    <p className="p py-2">
                    We advocate for more participation by the youth where they can engage on diverse issues at every level of governance in the Country (Ward, Constituency, County and National). We allow for participation from youth of different backgrounds, communities, tribes, religion, age, abilities, gender and political party affiliation. Some of the most progressive form of civic engagement identified is when diverse people come together to engage with one another, exchange ideas and concerns, and to negotiate an agreed approach to address issues they are confronted with. The participation process is conducted in an independent, unbiased manner and builds a culture of belonging and allows for active contribution by all people.  <div className="py-4" />

We also encourage them to participate in public policy formulation, planning and implementation by offering a range of activities and providing them with meaningful opportunities to participate and stir more of their input. In a world where the legitimacy of public policies and other collective actions rests largely on the democratic credentials of their production processes, it matters a great deal what the youth think, and what actions they consequently support, or are willing to undertake. They can magnify their voice, not only through information consumption and generation, but through active engagement and organizing.
                    </p>
                    <div className="close">
                        <button onClick={() => setShow(false)}>Close</button>
                    </div>
                </div>
            </Layout>
        )
    }

    if (open) {
        return (
            <Layout>
                <div className="pop_up">
                    <div className="icon">
                        <box-icon style={{cursor: 'pointer'}} onClick={() => setOpen(false)} color='#8067AD' name='x'></box-icon>
                    </div>
                    <div className="line" />
                    <h5 className="event text-center py-2">Civic Engagement</h5>
                    <p className="p py-2">
                    We advocate for more participation by the youth where they can engage on diverse issues at every level of governance in the Country (Ward, Constituency, County and National). We allow for participation from youth of different backgrounds, communities, tribes, religion, age, abilities, gender and political party affiliation. Some of the most progressive form of civic engagement identified is when diverse people come together to engage with one another, exchange ideas and concerns, and to negotiate an agreed approach to address issues they are confronted with. The participation process is conducted in an independent, unbiased manner and builds a culture of belonging and allows for active contribution by all people.  <div className="py-4" />

We also encourage them to participate in public policy formulation, planning and implementation by offering a range of activities and providing them with meaningful opportunities to participate and stir more of their input. In a world where the legitimacy of public policies and other collective actions rests largely on the democratic credentials of their production processes, it matters a great deal what the youth think, and what actions they consequently support, or are willing to undertake. They can magnify their voice, not only through information consumption and generation, but through active engagement and organizing.
                    </p>
                    <div className="close">
                        <button onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            <div className="pillar-head">
                {/* <p className="event text-center text-uppercase">pillars</p> */}
                <p className="h3 text-center event-title">Our Pillars</p>
                {/* <p className="p text-center">These are our pillars.</p> */}
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col py-4">
                    <p className="h3 text-start event-title">Civic Engagement</p>
                        <p className="p">
                            We advocate for more participation by the youth where they can engage on diverse issues at every level of governance in the Country (Ward, Constituency, County and National). We allow for participation from youth of different backgrounds, communities, tribes, religion, age, abilities, gender and political party affiliation. Some of the most progressive form of civic engagement identified is when diverse people come together to engage with one another, exchange ideas and concerns, and to negotiate an agreed approach to address issues they are confronted with. The participation process is conducted in an independent, unbiased manner and builds a culture of belonging and allows for active contribution by all people. 
                        </p>
                        <button className="btn-primary" onClick={() => setOpen(true)}>Read More <box-icon style={{color: "#8067AD"}} name='right-arrow-alt' color='#8067AD'></box-icon></button>
                    </div>
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                        <img src={pilars1} href="" width={400} height={300} className="" />
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                        <img src={pilars2} href="" width={400} height={300} className="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col py-4">
                        <p className="h3 text-start event-title">Civic Education</p>
                        <p className="p">
                            One way of encouraging participation of young people in governance is by conducting civic education on their rights, responsibilities and their electoral power. Knowledge of these will form a starting point in addressing the problems of poor participation of the youth in political leadership. For an election to be successful and democratic, the youth must understand their rights and responsibilities. They should be sufficiently knowledgeable and well informed to cast ballots that are legally valid in the participation of a meaningful voting process. Civic education is even more critical in post-election circumstances where political situations may be volatile and elections have an unprecedented impact on the countries’ future.                </p>
                        <button className="btn-primary" onClick={() => setShow(true)}>Read More <box-icon style={{color: "#8067AD"}} name='right-arrow-alt' color='#8067AD'></box-icon></button>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="my_row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col pillar_section py-4">
                        <p className="h3 text-start event-title">Leadership</p>
                        <p className="p">
                            We bring forth a ready audience for leaders made up of their constituents who are eager to engage them. We build effective leadership on solid principles, with an emphasis on areas of development and program components that support them. Involving the youth to be part of leadership recognizes the measurable benefits they have to offer. They draw on the widest range of talents and expertise, not the narrow circles of power. They build on empowerment and engagement, because lasting change only happens if people make it happen. By having the youth to represent them means that their interests are well addressed.
                        </p>
                        <button className="btn-secondary">Read More <box-icon name='right-arrow-alt' color='#fff'></box-icon></button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col pillar_section py-4">
                        <p className="h3 text-start event-title">Environmental Conservation</p>
                        <p className="p">
                            We enhance youth understanding to impact attitudes and help them make environmentally friendly choices. They can access information on environment related topics and participate meaningfully in discussions on environmental policies and laws. This has created a way for them to connect local environmental challenges and solutions to larger scale narratives that affects us as a global community. We advocate for environmental friendly campaigns where leaders use technology to sell their manifestos during elections thus reducing degradation through poster and hand fliers which are left scattered on the environment, hav ...
                        </p>
                        <button className="btn-secondary">Read More <box-icon name='right-arrow-alt' color='#fff'></box-icon></button>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col py-4">
                    <p className="h3 text-start event-title">Peacebuilding</p>
                        <p className="p">
                            The involvement of the youth in peacebuilding relies on the direct participation of those most likely to be affected. Without the involvement of stakeholders and those at risk, interventions and responses to incidents are likely to be inadequate. Consideration of gender perspectives and people with disability is essential to recognize that different groups have different vulnerabilities according to culture, gender, location, religion or other characteristics that influence their capacity to effectively prepare for, prevent and respond. Women and men often play different roles in society and have different access to information in disaster situations. The elderly and socio-economically disadvantaged are also vulnerable. 
                        </p>
                        <button className="btn-primary">Read More <box-icon style={{color: "#8067AD"}} name='right-arrow-alt' color='#8067AD'></box-icon></button>
                    </div>
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                        <img src={pilars3} href="" width={400} height={300} className="" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Pillars" />

export default PllarsPage
