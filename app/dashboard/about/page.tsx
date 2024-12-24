import Link from 'next/link';
function About() {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
export default About;
