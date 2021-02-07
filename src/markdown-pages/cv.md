---
path: "/cv"
name: "Andrii Maglovanyi"
title: "Web Developer"
---

import { Box, Flex, Link } from "rebass"
import { ProgressBar } from "../components/progress-bar"
import Expand from "../components/expand"
import Fa from "../components/fa"
import Text from "../components/text"
import Bullet from "../components/bullet"

<Flex flexWrap='wrap' className="container">

<Box px={3} width={[1, 3/5, 3/4]} className="main">

## <Fa type="user"/> Profile

Seasoned Web Developer with a modular and component-driven mindset, adept in bringing forth expertise in design, development, testing, and maintenance of software solutions.

On my way down the road, I evolved from a Web & UI/UX designer, through a Back-end developer role to the point where I am willing to develop myself as a Full-stack Web Engineer.

I'm able to effectively self-manage on independent projects, as well as collaborate in a productive team to create the most productive result.

<Expand className="gtm-profile-extra">
    <p>
        I believe in the advantage of a T-shaped specialist who is willing to extend his versatility with a broader range of technologies and disciplines.
    </p>
    <p>
        I worked a lot with PHP and a little with Java and Python. Today, I'm passionate about ubiquity and flexibility of the Javascript ecosystem.
    </p>
    <p>
        Participation in all stages of product development - from the prototyping of accessible UIs, building rich cross-platform frontend applications, to the stage of implementation of high-load solutions and application backend architecture drives me strongly.
    </p>
</Expand>

## <Fa type="list-alt"/> Executive Summary

- Over ten years of experience as Full-stack Web Developer;
- Extensive experience of development with JavaScript (Node.js, Angular/React and TypeScript);
- Worked with relational (MySQL) and NoSQL (MongoDB, Redis) databases;
- Hands-on experience in creating complex SQL queries, indexing and (de-)normalization data, replication, stored procedures, and triggers;
- Good understanding of the concepts of functional programming principles.
- Knowing the basic principles of object-oriented programming and design (OOP, OOD).
- Understanding of ideas behind the domain-driven design (DDD);
- Around one year of experience as a BigData software engineer (Java and GCP);
- Good working knowledge on Agile methodologies like Scrum/Kanban for software development;
- Understanding of CI/CD flow, PR/CR approach, Git/GitHub/Trunk Based Development flows. Code analysis, test coverage reporting, coding standards, and quality checking.

<Expand className="gtm-profile-preferences" title="About what I am looking for in a job">
    <ul>
        <li>I believe that great projects are created by teams with a high level of mutual trust.</li>
        <li>Each member of the team must understand "why" behind their "what".</li>
        <li>Inner motivation is crucial. Ideally, working on the edge of my abilities, keeping the balance between what challenging and boring.</li>
        <li>Autonomy is just as important. The need to feel confident and in control, an external stimulus should not create pressure.</li>
    </ul>
</Expand>

<Expand className="gtm-profile-role" title="About my usual role on a team">
    <p>
        I am comfortable working either independently (including remotely) or in team projects. I had such an opportunity on my job at <a className="anchor" data-name="InSkin Media" href="#speakap">Speakap</a> and liked the variety.
    </p>
    <p>
        A highly productive approach to me is to start a project as a team, brainstorming our ideas, building our deadlines and individual responsibilities before going off to work independently on assigned tasks.
    </p>
    <p>
        I appreciate the possibility to discuss non-trivial decisions along the way. Knowledge and decision sharing is the key, although I prefer having multiple short (up to 30 minutes) and focused meetings to longer ones since I found them to be more fruitful and fairly short to break the work context.
    </p>
    <p>
        When working remotely, it's crucial to be able to reach out to a team and it demands a habitual time boxing and a good preparation. I have recent experience with such and have built my procedures and tools which work best for me.
    </p>
    <p>
        I prefer timeboxing and walling projects to a certain timeframe to make myself more effective instead of allocating the entire day for it.
    </p>
</Expand>

<Expand className="gtm-profile-failed" title="About a situation where I failed and what I learned from this">
    <p>
        A well-remembered failure was the development of a greenfield project at <a className="anchor" data-name="InSkin Media" href="#inskin-media">InSkin Media</a> without early delivering of an MVP to the customers. Moreover, it had not enough coverage with automated tests.
    </p>
    <p>
        As a result, the product turned out to not quite meet certain expectations and required expensive refactoring.
    </p>
    <p>
        It was complicated because of the absence of sufficient quality control at the initial stages and resulted in extra time and reduced cost efficiency.
    </p>
    <p>
        Fail fast when it's justified. Extensive testing and incremental development to determine whether an idea has value are important to cut losses and adapt to changes.
    </p>
</Expand>

## <Fa type="suitcase"/> Employment History

<header>

<a id="speakap"></a>

### Senior Fullstack Engineer at Speakap B.V

<Text color="gray">June 2018 - Present <Bullet/> <Link href='https://www.speakap.com/'>speakap.com</Link> <Bullet/> Amsterdam, The Netherlands</Text>

</header>

A social network for organizations.

- Developed a UI with high-quality design and emphasis on accessibility.
- Created an applications market with an integration framework, a collection of 7 applications and a library of over 30 components.
- Automated build and deployment process through Webpack and Jenkins CI solution.
- Migrated the main platform to TypeScript, resulting in decrease of reported bugs.
- <Link href='https://bit.ly/2XAPPHM'>Harvested a framework</Link> for the application development (DB connector, i18n support, authorization module, etc.)

<Expand className="gtm-speakap-extra">
    <p>
        An interesting challenge was the improvement of an applications market of the main platform. The applications were communicating with third-party services to provide a seamless single-entry experience for the customer.
    </p>
    <p>
        Security concerns and storage of users' external data were paramount, as well as the ability to maintain and modify the collection of applications.
    </p>
    <p>
        Applications worked in separate containers, consisting of common functional modules but having their own configuration, own database and development cycle.
    </p>
</Expand>

JavaScript, React, TypeScript, Node.js, GraphQL, Jest, Cypress, Jenkins, GitHub Actions, Docker

<header>

### Front-end Developer at Backbase B.V

<Text color="gray">April 2017 - June 2018 <Bullet/> <Link href='https://www.backbase.com/'>backbase.com</Link> <Bullet/> Amsterdam, The Netherlands</Text>

</header>

A digital banking platform for financial institutions.

- Developed a configurable and extendable banking widgets collection.
- Controlled reusability and maintainability of applications, performed security checks.
- Involved in developing of a test automation tool, leading to a reduction in testing time.
- Migrated widgets to Angular 2+ with refactoring of repetitive code, reducing total lines of code.

JavaScript, TypeScript, Angular, Ramda, RxJs, SASS, Jenkins

<header>

<a id="inskin-media"></a>

### Senior Fullstack Engineer at InSkin Media

<Text color="gray">November 2015 - April 2017 <Bullet/> <Link href='http://www.inskinmedia.com/'>inskinmedia.com</Link> <Bullet/> Kyiv, Ukraine</Text>

</header>

An online advertising service, specializing in high-impact advertising formats (Page Skin).

- Designed and built cloud-based scalable Telemetry service based on GCP to collect and aggregate data of ~2000 RPS.
- Developed and maintained a microservice architecture for managing advertising campaigns.
- Developed a test automation tool and CI/CD for multiple environments.
- Performed an architect role and managed a team of 6 people.

<Expand className="gtm-inskinmedia-extra">
    <p>
        The problem was the development and parallel run on old and new solutions for collecting and processing a large number of HTTP requests (~2000 RPS) for online advertising campaigns and comparing two implementations.
    </p>
    <p>
        The verification required not only that new implementation gives the same results, but also it operates in acceptable nonfunctional limits, as the number of timeouts and latency.
    </p>
    <p>
        The R&D team of which I was a member, created a Telemetry service based on CGP service. It was able to accept (App Engine), enqueue and transport (Pub/Sub), log (BigQuery), process (Dataflow), and aggregate (Cloud SQL) incoming data, turning it into a detailed nearly real-time statistics for ad companies.
    </p>
    <p>
        The two solutions ran side by side and carried out daily reconciliations on the results. The verification process also made sure that calls to the new service are made on time with an acceptable failure rate.
    </p>
    <p>
        After a few months of parallel run, the Telemetry service was switched over GCP based solution and the old system was retired.
    </p>
</Expand>

Java, GCP, JavaScript, TypeScript, Node.js, React, Webpack, MySQL, Redis, Jenkins

<header>

### Fullstack Web Developer at Otravo B.V

<Text color="gray">August 2011 - November 2015 <Bullet/> <Link href='https://www.otravo.com/'>otravo.com</Link> <Bullet/> Kyiv, Ukraine</Text>

</header>

The air travel sales platform.

- Developed a flight/hotel booking engine.
- Implemented advanced statistics management system.
- Developed airline reviews and rating service based on customer surveys.
- Performed a key role in a team managing and a work process.

PHP, JavaScript, Lodash, MySQL, SASS, Jenkins

<header>

### UI/UX Designer, Front-end Developer at PIFWorld

<Text color="gray">September 2010 - August 2011 <Bullet/> <Link href='http://pifworld.com/'>pifworld.com</Link> <Bullet/> Kyiv, Ukraine</Text>

</header>

An online charity platform.

- Developed an SAP with JavaScript (jQuery).
- Carried out A/B testing.
- Redesigned the website and improved UI/UX.

JavaScript, ActionScript, Google Analytics

<header>

### UI/UX Designer, Junior Web Developer at All-Biz Ltd

<Text color="gray">
July 2008 - September 2010 <Bullet/> <Link href='https://all.biz/'>all.biz</Link> <Bullet/> Kyiv, Ukraine</Text>

</header>

A B2B and B2C eCommerce platform.

- Designed a corporate style, UI/UX.
- Developed a homepage CMS and search engine.
- Developed a translations management tool for 18 languages.

PHP, JavaScript, MySQL, ActionScript

## <Fa type="graduation-cap"/> Education

<header>

### Igor Sikorsky Kyiv Polytechnic Institute

<Text color="gray">September 2002 - February 2008 <Bullet/> Kyiv, Ukraine</Text>

</header>

Master's degree in Electromechanical Engineering. Faculty of electric power engineering and automation.

</Box>
<Box px={3} width={[1, 2/5, 1/4]} className="side">

## Details

Kyiv, Ukraine

+380 66 292-4562 <br/>
[andrii.maglovanyi@gmail.com](mailto:andrii.maglovanyi@gmail.com)

## Links

<p>
<Fa category="fab" type="linkedin"/> <a href="https://bit.ly/2r09XF8" title="LinkedIn">LinkedIn</a>
<br/>
<Fa category="fab" type="github"/> <a href="https://bit.ly/35AqCy3" title="GitHub">GitHub</a>
<br/>
<Fa category="fab" type="stack-overflow"/> <a href="https://bit.ly/2EuGEhd" title="StackOverflow">StackOverflow</a>
<br/>
<Fa category="fab" type="medium"/> <a href="https://medium.com/@andrii.maglovanyi" title="Medium">Medium</a>

</p>

## Skillset

Javascript <ProgressBar scale={5} />
React/Redux <ProgressBar scale={5} />
TypeScript <ProgressBar scale={4} />
Node.js <ProgressBar scale={4} />
MongoDB/MySQL <ProgressBar scale={3} />
GraphQL <ProgressBar scale={3} />
Docker <ProgressBar scale={3} />
Elm <ProgressBar scale={3} />
Jest/Cypress <ProgressBar scale={3} />
Jenkins/GitHub Actions <ProgressBar scale={3} />
Lodash/Ramda/RxJS <ProgressBar scale={3} />
AWS/GCP <ProgressBar scale={2} />
Python <ProgressBar scale={2} />

## Principles

**No silver bullets**<br/>
Off-the-shelf solutions deliver quick value but add inertia and accidental complexity.

**Reduce inertia**<br/>
Make decisions that favour quick feedback and change while reducing dependencies among teams.

**Eliminate accidental complexity**<br/>
Proactively remove and replace excessively complex processes and solutions so that you can focus on the essential complexity.

**Consistent interfaces and data flows**<br/>
Remove data duplication and create clean systems with consistent integration interfaces

## Project Management

Scrum, Kanban

## Languages

Ukrainian <ProgressBar scale={5} />
Russian <ProgressBar scale={5} />
English <ProgressBar scale={4} />
Spanish <ProgressBar scale={2} />

</Box>
</Flex>

---
