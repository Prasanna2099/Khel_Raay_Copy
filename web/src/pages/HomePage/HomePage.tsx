import { ReactNode } from 'react'

import { Metadata } from '@redwoodjs/web'

import Carousel from 'src/components/Carousel/Carousel'
import { cn } from 'src/lib/utils'
import HomeModal from 'src/components/HomeModal/HomeModal'
import { routes, Link } from '@redwoodjs/router'

import Image1 from 'src/assets/1.jpeg'
import Image2 from 'src/assets/2.jpeg'
import Image3 from 'src/assets/3.jpeg'
import Image4 from 'src/assets/4.jpeg'
import Image5 from 'src/assets/5.jpeg'
import Image6 from 'src/assets/6.jpeg'
import Image7 from 'src/assets/7.jpeg'
import Image8 from 'src/assets/8.jpeg'
import Image9 from 'src/assets/9.jpeg'
import Image10 from 'src/assets/10.jpeg'
import Image11 from 'src/assets/11.jpeg'
import Image12 from 'src/assets/12.jpeg'
import Image13 from 'src/assets/C1.jpeg'
import Image14 from 'src/assets/C2.jpeg'
import Image15 from 'src/assets/C3.jpeg'
import Image16 from 'src/assets/C4.jpeg'
import Hero from 'src/assets/hero_.png'
import HeroSection from 'src/components/HeroSection/HeroSection'
import Card1 from 'src/assets/card_1.png'
import Card2 from 'src/assets/card_2.png'
import Abt1 from 'src/assets/about1.png'
import Abt2 from 'src/assets/about2.png'
import Abt3 from 'src/assets/about3.png'
import Crowd from 'src/assets/crowd.jpg'
import Faceoff from 'src/assets/faceoff.png'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <div className="mt-6"></div>

      <div className="md:flex md:flex-row-reverse bg-white">
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            className="w-full h-full object-contain md:object-none"
            src={Faceoff}
            alt="Hero"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <div className="border-l-4 border-[#E76F51] pl-4">
            <h2 className="text-4xl md:text-6xl text-primary font-bold mb-6 ">
              KHEL RAAY
            </h2>
            <p className="mb-6 font-bold text-lg md:text-3xl text-black">
              Welcome to Khel Raay, where the Finesse of{' '}
              <span className="text-secondary">Trading</span> Meets the Grandeur
              of IPL
            </p>
            <Link to="/fixture-table">
              <button className="btn btn-primary">
                View IPL 2024 Fixtures
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-screen h-[450px] bg-primary overflow-hidden">
        <div className="relative h-full">
          <img
            src={Card2}
            alt="Card image"
            className="w-full h-full lg:block hidden"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '50%',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-primary flex items-center justify-end p-8">
            <div className="w-full lg:w-1/2 flex items-start justify-start text-white pl-16 pr-16">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  In the League of Legends, every Trade is a{' '}
                  <span className="text-secondary">Triumph</span>.
                </h1>
                <p className="mt-8">
                  Welcome to Khel Raay, the nexus where the fever of the Indian
                  Premier League (IPL) meets the precision of trading. In the
                  electrifying arena of IPL cricket, where every ball, every
                  hit, and every catch tells a story, Khel Raay offers you a
                  front-row seat to not just witness but actively participate in
                  the glory of these tales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-[450px] bg-secondary overflow-hidden">
        <div className="relative h-[450px]">
          <div className="absolute inset-0 flex">
            <div className="w-1/2"></div>
            <div className="w-1/2 relative lg:block hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-secondary"></div>
              <img
                src={Card1}
                alt="Card image"
                className="h-full object-cover"
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="w-full lg:w-1/2 p-8 text-neutral text-right pl-20 pr-16">
              <h1 className="text-5xl font-bold mb-4">
                Our <span className="text-primary">Vision</span>
              </h1>
              <p className="mt-8 font-bold text-left">
                At Khel Raay, we believe in the power of strategy, the potential
                of optimization, and the glory of capitalizing on every
                opportunity. Our platform is designed for the aficionado who
                sees beyond the game, for the strategist who plays beyond the
                field enabling your playing field the best in the arena. At
                Raay, we welcome you to experience the trials and tribulations
                of this immaculate sport by placing your opinions straight on
                the stump
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-4 text-center mt-16 mb-16">
        OUR <span className="text-primary">CORE</span> OFFERINGS
      </h1>

      <div className="flex flex-wrap sm:flex-row flex-col justify-center gap-10 my-8 items-center">
        <FlexCard
          heading={'Dynamic Trading Experience'}
          content={`At Khel Raay, we offer a unique trading platform that's as dynamic as
            the game of cricket itself. Trade on the performances of your favorite
            IPL stars and teams in real-time, with state-of-the-art tools and
            analytics at your fingertips.
          `}
          src={Abt1}
          alt="shoes"
        />
        <FlexCard
          heading={'Secure and Seamless Trading'}
          content={`Security is paramount at Khel Raay. Enjoy a seamless trading experience with robust security measures in place, with your data and transaction protected at all times.`}
          src={Abt2}
          alt="shoes"
        />
        <FlexCard
          heading={'Community of Cricket Traders'}
          content={`Join a vibrant community of cricket lovers and traders. Share your
passion, strategies, and insights with fellow members. Participate in
community events, contests, and discussions to enrich your trading
and cricketing experience.
`}
          src={Abt3}
          alt="shoes"
        />
      </div>
      <div className="divider divider-primary"></div>

      <div className="mockup-browser border bg-primary my-20 mx-8">
        <div className="mockup-browser-toolbar">
          <div className="input">https://app.raay.in</div>
        </div>
        <div
          className="flex flex-col items-center justify-center px-4 py-16 bg-base-200 relative"
          style={{
            backgroundImage: `url(${Crowd})`,
            backgroundSize: 'cover',
          }}
        >
          <div
            className="absolute inset-0 bg-black opacity-70"
            style={{
              backdropFilter: 'blur(10px)',
            }}
          ></div>
          <h1 className="text-5xl font-bold mb-2 text-center text-white z-10">
            Invitation to the Crease!
          </h1>
          <p className="mb-2 text-center text-md p-20 text-white z-10">
            With Insight, Precision, and Legacy as your allies, step into Khel
            Raay's vibrant world, where every decision is a play, and every play
            is a chance to score big. This is your invitation to join the
            premier league of traders at Khel Raay, where the spirit of IPL
            cricket and the precision of trading converge to create legends. Are
            you ready to craft your legacy?
          <div className='my-10'>
          <Link to="/fixture-table">
              <button className="btn btn-primary">
                View IPL 2024 Fixtures
              </button>
          </Link>
          </div>
          </p>
        </div>

      </div>

      {/* <div
        id="platform_overview"
        className="flex flex-col items-start justify-center max-w-[80rem] max-h-[60rem] gap-4 p-4 mx-auto"
      >
        <h1 className="text-5xl font-bold text-left mb-2">Platform Overview</h1>
        <Carousel
          images={[
            {
              alt: 'Item 1',
              id: 'item1',
              image: Image13,
            },
            {
              alt: 'Item 2',
              id: 'item2',
              image: Image14,
            },
            {
              alt: 'Item 3',
              id: 'item3',
              image: Image15,
            },
            {
              alt: 'Item 4',
              id: 'item4',
              image: Image16,
            },
          ]}
        />
      </div> */}

      {/* <div className="flex flex-wrap sm:flex-row flex-col justify-center gap-10 max-w-[80rem] items-center mx-auto">
        <PlatformCard
          heading={'Explore'}
          content={
            'Putting your favourite sport to use never became easier because Raay is here to help you take your Khel to the next level.With a Stellar view on a spread of arenas crafted on the boundaries of fans interests and preferences. Encouraging the unending fan craze of the most loved sport of all time, We are here to bring you into a new playing field. Welcome to the homeground of bets and tosses, where you will be faced with trials and trivias straight from the ground in itself. Our customised choices and player preferences entrusted to create a levelled up arena giving you the best pitch there is. With Raay, indulge in a community where passion meets pay.'
          }
          src={Image1}
          alt="Shoes"
          htmlFor="1"
        />
        <PlatformCard
          heading={'The Bid Chain'}
          content={
            'At Raay, experience the thrill of cricket betting with a diverse range of markets. From match outcomes and player performances to live betting, we offer an extensive selection to cater to every bid put forth. Raay’s versatile system provides a wide range of options and variables to place your bids based on the current scenario of the world. Personally customised choices make your competitive ground even more exciting and enumerating. Hold on tight to immerse yourself in the excitement of live cricket action with our live betting features and intrusive engagement of people from around the cricketing community.'
          }
          src={Image2}
          alt="Shoes"
          htmlFor="2"
        />
        <PlatformCard
          heading={'Build Your Portfolio'}
          content={
            "Raay functions as a platform where users can curate and assemble a collection of assets with the primary objective of optimizing returns and spreading risk over an extended period. By utilizing Raay, users can strategically choose various assets to build a diversified investment portfolio. The platform's purpose is to enhance the potential for higher returns while minimizing the impact of market fluctuations on the overall portfolio. Through intelligent asset selection and allocation, users can achieve a balanced investment approach that aligns with their financial goals. Raay's design fosters a systematic and disciplined investment strategy, promoting long-term growth and stability. By harnessing the power of diversification, users can mitigate the risks associated with individual asset volatility, increasing the chances of sustained success."
          }
          src={Image3}
          alt="Shoes"
          htmlFor="3"
        />
        <PlatformCard
          heading={'Instant Withdrawal'}
          content={
            'With instant profit withdrawal, users can conveniently and seamlessly access the profits they have earned from their investments without experiencing any delays or waiting periods. This feature enables swift and efficient access to funds, providing users with immediate access to their earnings. By eliminating lengthy withdrawal processes, users can quickly reinvest or utilize their profits as desired, enhancing the overall investment experience. The instant profit withdrawal feature also adds a level of flexibility and convenience, allowing users to manage their finances with ease. Moreover, it eliminates potential frustrations and ensures that users can readily access their funds whenever they need them. This streamlined process promotes user satisfaction and reinforces confidence in the investment platform.'
          }
          src={Image4}
          alt="Shoes"
          htmlFor="4"
        />
      </div>

      <div className="mx-auto max-w-[80rem] my-8">
        <div className="flex flex-col md:flex-row gap-4 mx-auto">
          <GridCard
            heading={'Market Orders and Instant Exit'}
            content={`Market orders are a fast and reliable method to buy or exit a trade in
          a fast-moving market. With market orders, quantities are matched
          almost instantly after placing an order at the best available price.
          Come test drive.`}
            className="bg-secondary text-secondary-content"
          />
          <GridCard
            heading={'The competence to anticipate'}
            content={`Look at research articles and learn to do the same with precision
              and efiiciency`}
            className="bg-accent text-accent-content"
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-4 gap-4 mx-auto">
          <GridCard
            heading={'Raay ka Raay Jano'}
            content={`Learn about what Khel Raay has to say on the hottest topics.`}
            className="bg-primary text-indigo-100"
          />
          <GridCard
            heading={'We Care'}
            content={`Be it loss protection or data security, Raay is user first always.
          Check out the latest on responsible trading.`}
            className="bg-base-300 text-base-content"
          />
          <GridCard
            heading={'Exiting trades is your choice'}
            content={`The "Exit" feature gives the user an opportunity to exit from the current
          trade and helps in controlling your losses and maximising the profit.`}
            className="bg-neutral text-neutral-content"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[80rem] my-8">
        <h1 className="text-5xl font-bold ext-left mb-2">
          <span className="text-primary">Raay</span> takes care of you,
        </h1>
        <h1 className="text-5xl font-bold ext-left mb-2">
          so you can perfect your <span className="text-primary">Khel</span>
        </h1>
        <div className="flex flex-wrap sm:flex-row flex-col justify-center gap-10 my-8 items-center">
          <FlexCard
            heading={'Smartest viewpoint of people is in Raay'}
            content={
              'Grasp and absorb the mastery of trading and financial skills through your own learning and also with the help of fellow Indians'
            }
            src={Image7}
            alt="shoes"
          />
          <FlexCard
            heading={'Gain trading knowledge at its earliest'}
            content={
              'Raay gives you factual information on events that you can learn about, observe and execute yourself'
            }
            src={Image6}
            alt="shoes"
          />
          <FlexCard
            heading={'Control at anytime and anywhere'}
            content={
              'Raay hands you full control so you can take matters into your own hand. It allows you to exit from a placed bid at any point of time'
            }
            src={Image11}
            alt="shoes"
          />
          <FlexCard
            heading={'Latest news without any hassle'}
            content={
              'Raay serves as a platform where you get to develop a better understanding of the world around us along with an opinion'
            }
            src={Image8}
            alt="shoes"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[80rem] my-8">
        <div className="flex flex-wrap sm:flex-row flex-col justify-center gap-10 my-8 items-center">
          <FlexCardBG
            heading={'Keep an eye'}
            content={
              'Watch what is happening around you. This includes things like Politics, Sports, and Entertainment.'
            }
            src={Image5}
            alt="shoes"
          />
          <FlexCardBG
            heading={'Understand the news'}
            content={
              'Learn about the news without any distractions. Understand the main point of every story and form your own thoughts.'
            }
            src={Image9}
            alt="shoes"
          />{' '}
          <FlexCardBG
            heading={'Have the courage'}
            content={
              'Be brave and support your thoughts about future world events by putting your money into them.'
            }
            src={Image10}
          />{' '}
          <FlexCardBG
            heading={'Have the patience'}
            content={
              'Be patient and resilient when the market goes up and down, and make choices as things happen.'
            }
            src={Image12}
            alt="shoes"
          />
        </div>
      </div>

      <div
        className="hero"
        style={{
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/raay-1f930.appspot.com/o/WhatsApp%20Image%202023-07-19%20at%206.03.06%20AM.jpeg?alt=media&token=334bc6c0-918f-485a-b80d-40a2767f58f7)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              How much are your opinions worth?
            </h1>
            <p className="mb-5">
              In navigating life's uncertainties, finding solace in the small
              joys can be profound. Embracing challenges with resilience often
              unveils hidden treasures along the journey.
            </p>
            <button className="btn btn-primary">Start Trading</button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default HomePage

function PlatformCard({
  heading,
  content,
  src,
  alt,
  htmlFor,
}: {
  heading: ReactNode
  content: ReactNode
  src: string
  alt: string
  htmlFor: string
}) {
  return (
    <div className="card w-72 bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p className="line-clamp-3">{content}</p>
        <div className="card-actions justify-end">
          <HomeModal heading={heading} content={content} htmlFor={htmlFor} />
        </div>
      </div>
      <figure>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-[170.06px] w-[288px] object-cover"
        />
      </figure>
    </div>
  )
}

function FlexCardBG({
  heading,
  content,
  src,
  alt,
}: {
  heading: ReactNode
  content: ReactNode
  src: string
  alt: string
}) {
  return (
    <div className="card w-72 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-[170.06px] w-[288px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

function FlexCard({
  heading,
  content,
  src,
  alt,
}: {
  heading: ReactNode
  content: ReactNode
  src: string
  alt: string
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-none card-bordered h-[500px]">
      <figure>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-[250px] w-96 object-cover"
        />
      </figure>
      <div className="card-body h-[150px]">
        <h2 className="card-title">{heading}</h2>
        <p className="">{content}</p>
      </div>
    </div>
  )
}

function GridCard({
  heading,
  content,
  className,
}: {
  heading: ReactNode
  content: ReactNode
  className?: string
}) {
  return (
    <div className={cn('card text-secondary-content', className)}>
      <div className="card-body items-start text-start">
        <h2 className="card-title">{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}
