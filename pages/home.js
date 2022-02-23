import Head from'next/head';
import Image from 'next/image';


const Home = () => {
    return (
        <div>
            <Head><title>Home page</title></Head>
            <p>Home page</p>
            <Image src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tkssharma.com%2Fstatic%2F6038e35c19cde1cd7c3e89262a45a01d%2Ff0991%2Fnextjs.png&imgrefurl=https%3A%2F%2Ftkssharma.com%2Fnextjs-serverside-handbook-for-developers%2F&tbnid=IcYzXoTt_PtrjM&vet=12ahUKEwiWhs6poJX2AhUNRWwGHYg_B5cQMygJegUIARC7AQ..i&docid=uqU9OZ3ozLnXzM&w=400&h=200&q=next%20js%20photo%20png&client=ubuntu&ved=2ahUKEwiWhs6poJX2AhUNRWwGHYg_B5cQMygJegUIARC7AQ" width="500" height="300" ></Image>
            <style jsx>
                {`
                p{
                color:green;} `}
            </style>
            
            
        </div>
    )
}

export default Home;
