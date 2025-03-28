import React from 'react'

const Home = () => {
  return (
    <div><>
    {/* hero - start */}
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-4 flex items-center justify-between py-4 md:py-8">
          {/* logo - start */}
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            <svg
              width={95}
              height={94}
              viewBox="0 0 95 94"
              className="h-auto w-6 text-violet-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            talentsphere
          </a>
          {/* logo - end */}
          {/* nav - start */}
          <nav className="hidden gap-12 lg:flex">
            <a href="#" className="text-lg font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
              Home
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Features
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </a>
          </nav>
          {/* nav - end */}
          {/* buttons - start */}
          <a
            href="#"
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Contact Sales
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
          {/* buttons - end */}
        </header>
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          {/* image - start */}
          <img
            src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* image - end */}
          {/* overlay - start */}
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
          {/* overlay - end */}
          {/* text start */}
          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
              Very proud to introduce
            </p>
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Revolutionary way to build the web
            </h1>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>
              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/* hero - end */}
    {/* gallery - start */}
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Gallery
        </h2>
        <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
          {/* image - start */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src='data:image/png;base64,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'
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
            Aggressive Portfolio
            </span>
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src='data:image/png;base64,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'
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
            The Defensive Portfolio
            </span>
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhATExMRFRUXFRobGRgVFRUeGxcYFx4aGBYVGhgYHSglGBolHRcVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICYuLi0rLy0vNy0tLy0tNS0tNy0tLS0tLS0rLS0rMDUtLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEsQAAECAgUEDA0CBAYDAQEAAAECAwARBBIhMUEFUWGSBhMUFSIyM0JTcZGxBzRSYmNygZOhstHS0zVzI8HC8EN0gqKzwyWD8aMk/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAC4RAAICAAMHAwMEAwAAAAAAAAABAhEDITESMkFRYXHRcoGRQoLBIjOx8BNDof/aAAwDAQACEQMRAD8A+tZPye2aOyQ00VlpBmpItJSLSZTjhyaqQ/g0OePAMp6LIZya4E0ZlRuDKCZeqMMY7vq3Kc1dhwMu8G274QAFOTwA4Vs0aQE0hKcwtmSM+aC72t9Cxqj7YuqmJWl0JnwU22HETEs/95jDG3DMrUV9IAU3tb6FjVH2xN7W+hY1R9sN7eMytRX0ibeMytRX0gBTe1voWNUfbE3tb6FjVH2w3t4zK1FfSJt4zK1FfSAFN7W+hY1R9sTe1voWNUfbDe3jMrUV9Im3jMrUV9IAU3tb6FjVH2xN7W+hY1R9sN7eMytRX0ibeMytRX0gBTe1voWNUfbE3tb6FjVH2w3t4zK1FfSJt4zK1FfSAFN7W+hY1R9sZRynQdsLX/8ALXCyirVM6wMiniXzj0G3jMrUV9IVVS3JmTQl6y+7a4qa4mZNiSF0UgEIo9t00yuAOKcyk9ojpNGAJqUewT4uEwJyq3TUIZFMdna1ZZaCrMJzFXPWHsEdFMds/hddqpC3PVzaIhoVQqim5NGvlcOvyc0j7Yb3tb6FjVH2xZimrKiFNKSBjaZ9QCevshnbxmVqK+kAKb2t9Cxqj7Ym9rfQsao+2G9vGZWor6RNvGZWor6QApva30LGqPtib2t9Cxqj7Yb28ZlaivpE28ZlaivpACm9rfQsao+2Jva30LGqPthvbxmVqK+kTbxmVqK+kAKb2t9Cxqj7Ym9rfQsao+2G9vGZWor6QN6lBKVKkqwE8VWFuaAAb2t9Cxqj7Ym9rfQsao+2Ftj2X00pClhC0SVVkQTgDOaRpilA2UMOqeHCb2ogEuBIBJKhZInyTfK8RtwkrtaamNuNJ2Ob2t9Cxqj7YJvYz0TWon6RiZM2RLdpzzHALSUEpKUqrHiXmd3CVhmj00SUXEsZqStCNBaSlx5KUhI4FgEhccBD0KUflXupHcYbjJoTyP4vR/2kfKIchHJjYVRmAbi0j5RHE5JaACZGQEhwjADdJ4i/VPdBITVQ0IS6UzmpNtpwEh1f3phjaRnVrq+sAEiQPaBnVrq+sTaBnVrq+sAEiQPaBnVrq+sTaBnVrq+sAEiQPaBnVrq+sTaBnVrq+sAEiQPaBnVrq+sUQlBmAomV8lqs+MAHiRkUfKrK6Q5Rhtu2IEzMqqyFW41vOGENrfZCw2XUhw3ILprG+5NaZuPZGnFrgRSQ5Ege0DOrXV9Ym0DOrXV9YyUJEge0DOrXV9Y4ppIEyVAaVq+sAFiQAJTKsCojQtWHtjN2PZWbpaFLQl1ISqXCUZ3A4KOeNbLqybSujZiR5PYplB16kU1Di1KS2uSBOUhWWLxKdgF8IZPWhGVqXWVVG1kA1jMn+FZOcyb7NEbeFTab0VnN4ypPm6Pdxj5X2QIYeYZUhai6QARKQmoJtn1xgUvKLhymy22p4oKD/DUp1CVGq4ZmtbKwGYBusnCuy1lW7KCFm9SbElfBBcTYFEznpEuoRqGGnJJ52rOc8f8AS9ng6N3Zxld2jMtraKQorkZgGyqo46QImynLhRRlLYWa80yUlFZNpE+EUlN074yPCPQW22G1JSAouSKrSSKqrybTGps6bAoSzwr271KPOGcxYRyhpm/BJOf68+H95A6blB5eTSsoWFFhJLhUgTJAJUkIJNvUn2RXY1tysnpO2Jq1Xb0lSzwl88ql8ItSWxvSDb4qjnKlxU4TjuxRsHJqTbxXucryl4Tg4/ofqCi3NW3uiPg4oiV0d0qK7HbgtYHFReEkBXtjvg+bG35QsFi0y0cJ2CeDNsGju38tgSOYjMYHsCQC/lG/lE3EjnO5jbHTEirxPYzhxS2MuZfJH6xTP2z/ANMe0jxOSEf+XpYt5M4n0OOMe2jlj6rsjvg6PuxSj8q91I7jDcKUflXupHcYbjgdRHJk9zMVZT2pEp3cURJUiQ5GePG+FmaJkxwJozBODSPlEQZURIGS7RPimY6wbvbAFlB2q7X2uVXg1Z5rZz0xms7ICqmLolQApE687DwQq7/VnjSVS0qS6BW4KbeCcRMSz/3mMeQoSxvy8beLmM+IjCU464UVLavgjniSaquZ6ekZYQh9ujqUA4sApFRUiDMC24cUxoSVnT2H6x4rLqxvtQzbxE4HO7hKNLZRlx1l6hobMkuLIXWQZkVmxZPQo3Rp4V7KjxVkWJVt8GejkrOnsP1gNKpIbSVuLbQkYqsFtgtJjz2z3KrjLLamVrQS5ImreKqjLhDOBFtnLs6CrjTm3elQ5wxIjMcK9m+LLLEq+hr0/KBTR3H2y2sJbUpJEyFSBN4N1kZ+QtkKnmUuLSQolQkhl9SbDIWpBHxhSjuDegi3xZfNVK44yg2wJwChIHC4y7kqPOOYRqUEoPo6MbUnJU+ADYdl599panApxQXIVUJFkgZTmkYxnbClObpp9RCJlfCrqIq8Jy6qFVjPT7YZ8GLgFHdv5TAE81OYRXYOsClZRv4+AJ57mYWR0nGv8iXQ5R2nsNvmBya0tWVaSNsqqqGakJF0m7JLrSw7MIrlOjf+Wo6SpRmkWlSp3LxBBHslDGSljfelG3iHAzuawlOK5UWN96MbeKnAzuXhKca2Vtfb+CbC2fuNvKTzDCmkOFVZ0yTa6q0FItNay1QhXZTShRG0LCCusqrIOuplYTOYOiEtnSwaRk2/lDeCOc1nFsd8JrgNHav5XEEc1WcRzw8GDcLWt2bm8pZLI9I3Q1ySUPOJsBkSFj2lwFXxhDZIw6KLSazoI2tUxUAnZdOG8o5YRR2A6pLigAkSCTO2Q50hjnhbLdOS7QHVgLAWxWAKTYFJmJm7HPHGEM0+FnSSjTXQz9hrLhoKClwJT/EsqA85U7YR8HLC1MulLq0DbLkhBnwU31kn4Rq7CHAKA2OF/iXJUecrECEPBk4Aw9fymAJ5qcwjvOOWJ38nKMVcO3PsLbDaKF0mnhXCku2ZVI8Nd6QQFe0QbIbVXK1KSgISA0ZACQA/hXAXR3YOsClZRv4+AJ57mYWRbJCxvvSzbyZwM/8ABwlONySU5+nwSEUoxdcfJKdPfmjXT2vTLiOwPZpPduT5y4yf+RMEpqxvzRjbyZwM+I7hKcC2aLBpuT7+Mm8HpE5xFjvw9Pkst2XfwG8J09ztTlyuHqqh7Z1W3Cucr27gfKEI+E1wGjtX8riCOarOIe2dOA0FY4V7d6VDnDOIxDTD7v8ABqWs+3kpSZ70i6W5UYHyUxNilbe1MpSqvYHylxykuDekC3xVHNVLipxlHdijgGTUi3ivc1XlLxlEf7b9RVvr0i3gznud2UuWxn5CIHsBnt+UZS5RN/rOwTwZuAUd2/lsATzEZhA9gSwH8o38om4E853MLI3if7Pb+TMPo9zuSJ770u6e1n/pj20eJyQsb70s28mcD6HCUe2jjj6rsjrg6PuxSj8q91I7jDcKUflXupHcYbjgdRPI/i9H/aR8ohyEcmNhVGYBuLSPlETelqQFWwDylfWAGqTxF+qe6PFUH9af9X/rRHrVUNCEulIIKk22m2QkMY8hQkDfl4W8XOZ8RGM5x3wNJdmccXWPcLl79XofqJ+Z2LbPPGMm/uH52oFl1A32oYt4icTndxnF9nSAKRk2/lDeSec1nNkd470PS/ycpbsu/gv4UPF2f3f6VQ5s58QV1t/MIR8JrYDDN/K4knmqzmHNm7YFBUbb271KOIwJjENMPu/walrPsco/6Qf8svuMG2AeJI9ZfzGFqO2N6CbfFl85UrjhODbAmwaEg8LjLuUoc45jEnuS9Xksd9ekT8F3i737n9KYpsE8ayj6/wDW5E8GLYNHdv5TAkc1OYxXYOgGlZRv4+BI57mY2x0xNcT2MQ0h7lsk/rFK9Q9zUVyr+sUb1U9zkTJSBvvShbxDiZ3NYznFcqIG+9GFvFTiZ3LxnOH1fZ+B9P3BtnvjGTf3D8zUW8KHi7P7v9KoHs6bApGTb+UN5J5zWc2R3wmtgUdq/lcSTzVZzEw9cP3LiaT9h7Zx4grrb+ZMde/SR/lE/IIps2bAoCjbe3epR5wwJjrzY3pB4XiiecqXEGE4xHcj6vBqW++wTYP4g3/7PmVCHgv5B79z+lMObCGwaA2eF/iXKUOcrAGEPBk2Cw9fymBI5qcxiz0xO/5ZI6w7eCbBfGso+v8A1uRbI/6xTP2j/wBMD2DoBpWUb+PgSOe5mNsWyQgb70sW8mcTP/BxnONz35+nwZjux7+S1O/WqN+2fkdgWzbx3J/rI/5ExemoG/NGFvJnEz4juM5wLZogCm5Pv4ybyekTnMI78PT5Et2XfwMeFDxdn93+hUP7PPEV9bfzJjO8JrYFHav5XEk81Wcw9s6bAoKzwr271KPOGcxiGmH3f4NS1n28nKT+kD/Ko+VMd2JfpifVe+dyB0lsb0g2+Ko5ypcVOE47sUbByak28V7nK8peE4j/AG36irfXpAeDDxd797+hED8H/L5S/cT8z0W8GbYNHdv5bAkcxGYwPYEgF/KN/KJuJHOdzG2N4muJ7fyZh9HuXyR+sUz9s/8ATHtI8TkhA33pYt5M4n0OM49tHHH1XZHXB0fdilH5V7qR3GG4Uo/KvdSO4w3HA6iGTa25mKsp7UiU7uKL8/8Ad0dq0iV7U/bnswzStzzsi2R/F6P+0j5RDkAKht0hwKKLRJMgbLLZ+34S9uIzkBwUx2lJdbJNlQoVZwUi+tfIA+2Nml0m0ttkbYUkjEJlirMJkDG+4wWh0UNgi8kzUfKVcT8Iqk1oMuRhUzIDrlKZpJdaCm0gVQhUjIqN9bzj2RMt5CdpDlGWp1pBaUSAEKNYzSqVqvM743KPRAlSlTKlKvUc2CRmF12NscRQxthcJKlSkJykkYhMs+e+KpyVO9C2uS+DE2S5DdpSEIW60gBcwQhRmZEStVpPZBsuZKdfYU0pxlCeCa1VXNM8VaI1DRKzgWszq8UAmQ0kTkVWm3qzCKv0PbFzXagXInwVXGahK/CVo7TBSkqz00LazyWfQzEZHeTRTRtsaq7WUV6ipyM7ZVtMWyDkt6jspaS4ytMyaxSq2sZ4K0xq0qj1+CTwDxgJgnRMG4iYIi7zUxIGqNAFoxToszaOqI5Nqr6i1rS+DA2M5DdorakodacClTmUKFwCZWK0RzImQXWHKQ4l1pZdVMgoVwTNSpWK86N1xghAQ3JIuxEgbyCLlWzniRpmON0QNpUGwkKNpJ5ysSoi2Zz4fCK5yd29dSJpVksuhh0XITqKW9SQ60VKTIoqKkJ1ZW1p8yK0nITi6Y3SC8yFoSOBVVaBWE+NOXCjeo1DDYVVnWVaVKtJNsp5wJ3R2i0arNRtWbzmnaUjMmcNuWt8K9ha5LnoYeW8hO0hyjLU60gtKJACFGtalUrVeZ8THdkmQ3aWhCFOtIkuYIQozsIlarT8I2KPRDWLizWXcPJSLuCMJ3m++U4q6wK22OkSTxRM1RiFEHn4Y3A2XApyVU9NA2neSz6GblvJbr7BZU4ygEp4QSomYIkJVsTHXclO7l3MXGQkMhuvVVOQFWtKtLCHm2i6pLij/DElITLHBRv0EHMcLZnpVG2wgKPAxAJBJzGV6bZystSLwSIm06q+pbWtL4MvIuSnmGEspcZUkVuEUqtrEquCtMA2NZCdorakIdaWFKnMoUMAmVitEbdKo5UEpBqpxqyBkOaLLj7I6ujyQEI4IlKycwm4yIuViDng5Sd566i1lksuhhZEyC6w5SHEutLLqpkFCuCaylEWK874R2iZDdRS3qSHWipaZFFRUhOrIzrT5nfG0KNUbqNWX2k2iteqZnMic5GyyUdolDDaSASVG9ZtKiLAT9IrnJtu9SWuS+DEeyG6qmN0nbWgtCJVKirRJSZ8afOPZFMsZBdffo7inWkqbIISEKNaqoKN6uqPQUajVSVG1apTNuGAncmZNmmI3RgFFZNY4EgcEZrOsid8pAzlMlOSad9Ba5L4MLZLkN2lNoQt1luS5ghKjMyKQLVaYPl3Jbr7CmlOMoSSnhVVc0g4qziUaKqEFrrOSVI8FNtUSnJVU8+2XsEdfoldQr2oBmEgm0+cMZXjrustilJVnpoW1nks+hlv5Kd3JucuMhAaCCspVYEgCseFIWCcdyXkh5mjijhxpSZLFYoVPhkm6t53wjWpNHKykE8EWyF5IuBPk2/ARylUYqCUA1UY1bDIXAaMJQ2nVX1Fq7pfBi7GsiO0VtSEOtOBS60ylQwCZWK82OZCyC7R10haXWl7aoEgoUKsiokCSreOeyNx1g1AhEki6yYIGMiLjjp9s4GpgtoCWUg221ifaScSc+F8jKRrnJ3b11ImlWSy6GTQchOIpb1K21slaSkoCFcEkJlbW81PsMaiW35iakS+N4xq+TP2md1gPRKKGwQJkkzKlGZJ0mDxmTctWVSrRL4FKPyr3UjuMNwpR+Ve6kdxhuBkxaDSnUNtJDaFBKEidZ+2QAnyEG3e90KNZ/8ABDtB5Nv1E9wg8AZQprot2lsf6ntJ6DSe2Jvi70SNd/8ABGi7hA4AS3xd6JGu/wDgju73uiRrP/ghyM/L1AfdCNpc2s1HATXWBNaKqFVUSKiDaDWErTImUgCbve6JGs/+CJvg90SNZ/8ABC29T6EqqvuOcJiqFrNiW1pL1t/CSDeTfpML0eg09NQKpDZSkM2SBKqoAeClFE+FwpG+cjPCANDfF3oka7/4I7vg90SNZ/8ABGflLJ1JW7WQ6G0cCwOu2yC6xqylYpSDISCtrkqxXBtkzJ9KS6VqdTV2paQkuOuALLhWhRSoJrSQQmcwbJaYAe3e90SNZ/8ABE3e90SNZ/8ABCNLybTNuecafSlKiKqVKUoSk0CKiklLcih08GdbbbZSBhh6iUpTFQrQXaw4YcUiytNRFRAq8GUgawtkqtI1gDb4u9EjXf8AwRzfF3oka7/4IxV5GptVSd0WlKhWDzoNYlkhXFMgdreMhxQ+UAySDG5ktpaW5OEqVXcMyZ8FTiyjq4JTZhdhAHBlB7okaz/4I4qmum9ls9anuroNJjRaxgkAZe+D3RI1n/wRzfF3oka7/wCCNNy6AwAlvi70SNd/8Ed3e90SNZ/8EOQxAGXu97okaz/4Im+D3RI1n/wRqQJ2AM/fF3oka7/4I7vg90SNZ/8ABDkXagBDd73RI1n/AMETd73RI1n/AMEaarjKAlajhfogBHfF3oka7/4Im+LvRI13/wAEHrqzfD+54xDWOcaOofWAA74PdEjWf/BE3e90SNZ/8ENtLVK74GL11ZvhACO73uiRrP8A4Im73uiRrP8A4IO5lFtIBWtCeFK/GRsl29kGo9KQ4CUKCgDKYz2GXYRAm0rqxfJqlKU6pQSkkpEgVm4eehOfND8AZ4znWPlEHgUBQeTb9RPcIPAKDybfqJ7hB4AG7A4I7A4AkHTcIBB03CAOwN3CCQN3CABxZq+KxZq+ADRIkSAFzEiGJABGsYJA2sYJAFHLoFBXLoFAEhiF4YgCQJ2CwJ2AKRdrGKRdqACxyOxyAARIkSACtXQNa63BSfWIPFGImOdhovijYKpyUUi6YlacTaDYProhhCZAAXCLoTUVpuTWnQkLQDK6VhAkRIEYaItQqChpJSgEAmdpJtsGPUIO5PCU9McbCpcIpnMXA6M+mcQbKu6KM8ZzrHyiDwBnjOdY+UQeBQFB5Nv1E9wg8AoPJt+onuEHgAbsDgjsDgCQdNwgEHSbBAHYG7hBJwN3CABxZq+KxZq+ADRIk44VAYj/AO3QAAxIGp4AkW2XmRkOs4QSACNYwSBtYwScAUcugUFcugUASGIXhiAJAnY45SADVBBV5MxPrOYSited8pgyPePgQfbFolkjheCc50DMLz1D+7Y44uQJ/snAdsdoyTNRVKdgszDrxmT8IBl2XqxUJWC7SLRPtBgpMBWKpSQOCBIhIFgslZmEjYM8dfUCEi8KPwvPsIs9sABadngR15jcYjpNwvPwGJ9neRHVonIzkRce8dX0iIRK28m8/wAtA0QyAdkSEhBIo1dF5xCg3VyE5E6BeYjblYcVSbedLRmMdcWAJkgAYmIh0KE0kHqPtgAbPGc6x8og8AZ4znWPlEHgAFB5Nv1E9wg8AoPJt+onuEHgCjsKh3h1cJX6bLOwgwelKkmd+YZybAO2F1IlVvMlWnOVTTPtVdFRGGg6bhCxWJymJynKeGfqi9EcKk22H+RtHw+IMKFh4G7hBIG7hEKDi7V8LrWZySAZC323AHP9RdFkuTlVNqvgBxjI3SutxIi0Sxhx0CU524AEnrkMPrAw3XtULMAdN5OnuHWYI22BO8k3k3xeAFUoAEsNNs53znfFWLpZiR7AbPhKCGBAyURI8I32SnK6+dyfjADLWMEhZp3hFMrM/nSnLst7YMhYM5YGR6/7MShZ1y6AwVy6BQKSCvLkCRfh1mwfGEjMisCc6QMQM+eY77picMMMixdszbI5zdZnAMotEsK0gJAA/wDucnTAKTYa2EuF1Z/Z3Q1AnhAC8pqOYAS6zOftlLthhqFqKkyM53ytzJkmftlP2wy1jBhBYA20Qo3VZcHOJ2qHVYJQeORCgIkSJABWrovFGrovAFVicpxKsrhFXmwoSM7cx/nEZaCRIT9pJ0Y9UAUZ4znWPlEHgDPGc6x8og8AAoPJt+onuEHgFB5Nv1E9wg8ABfROqcx+MpdxMBpA4KtAmOsWj4iGHYERFslC62qwVbKaj2cQ/CftMNoHDOlI+BM/mEBYbqpSm8gCZznE+0xd9RmiVhIIBlORMj3BRtzRehOoZxwC8gQsqSySCZCwEGw4q675f6YMwk2qUJE2dQH8pzPtizuETQuoFCALB/enSYsy2AonP/dmaJFmr4hQ0SJEgBcwKkKASSbhIk5gDMnqlOCmOGCDBoBCCcZhR7ayh2TEEohtVmPC1if5AfGCIEwRFFJq1CLhJPsJAHtBl2mLZmgrl0JqcrcFKk6SLZYYG/6GGqSohJIvw67h8ZQJCZADMJdkEU6BK6GYXhiIUkCdgsCdgCkXaxikXagAscjsSAF4kSJABWrovFGrovAFHQZWGRjjQVLhEE6BLN/OcR5RAmAScwxiNrJFqSm3GWjN/dkAUZ4znWPlEHgDPGc6x8og8AAoPJt+onuEHgFB5Nv1E9wg8ADdgRgzsLuuhMpmUyAOs2D4wCBZPP8ACa/bT3CH03CMugvgMt38FLaT1qSiXzCLtZVG3rZUhSQkAhZBqq4IUQCRKyZxwMRaGpav3NKBu4RyjPVwTKUlKTqKKZ+2U467hFI1ToHFmr4RyrTSy2XAhTkiOCkGduNgPdDzBu6oEDRIkSAFzEhSk00peab2tZC63DAMk1QTbZjLEi+B0ymlvbjfJAKQbpgLUbtCYjdFjGzTaxjlI4qtAn2WjugVHpCSJ3TWpIniUlSf6SYrlGmJQFJIUSUEgAX3JCRpJUAItkSbWRZToWEFJmkit1jm98/9MWjJ2L0zbKOglNUyCQDeUoAFa0CwzmNChGtAOrdEhiF4Dk3KBdU+ktrRtaykFQMlyJFZMwLLPjAD0CdgsBcUJyxA75y7jAFYu1C9KdqIWuRVVSVVReZAmQliZSi2TKRtiErKSisJ1VXjQZgQA3EijzoSkqNwE4vAC8SEt3Hb9p2tcqlavI1c1WcpT9sOwAVq6LxRq6B01/a21rCSqqCaqbzLAQAR1wJEyZARxt5KhNJBFl3sP8xA6G/tjbSykprpSqqq9NYTqkHEQcwAFnjOdY+UQeAM8ZzrHyiDwACg8m36ie4QeFWmXEpSkLRIADiHCzy4vVc8tv3avvgAWUXikIlK1RH+1Su8CMlap7WT0n/bGyppZvU0ets/fFdzK9D7o9flxGrJHKSkYbCzVQmdhCCRpAogB/3Hti9JUSbSTwRj5io2dyq9D7o6PP0DsETcqvQ+6P3xnZNqW91v/tGay6RtsiRa589JPeB2RGKWpNlhm7jPnOBJxzGNPc6s7Xujp8/Se0xzcyvQ+6PX5eeLTLta97MxVOUUjCZQbMJ7QSP/ANFRKJTiC8siZIN13ACz3JjT3Kr0Pujo8/QOwRNyq9D7o/fpMKZmLrDcePP4FzlE1iJCQJGmwvA/8Se0xZqnkysvIloCikS6+FB9zqzte6Onz9J7TEFHVna90fvi0zFOtTMRlNSqigJAoBInO1W0kW6NsIhKmrJQskzNQ/I9G+KKr0Pujo8/QOwRDRVeh90fv0ntjLi2dYySvLjftayMtDhBlOwOLI669It+AgZWStsm8qH/ACMxsbmVnZ90dPn6T2mJuZXofdH79A7IbJMKWxXQzsmUmTLIlc2gX6G9HpP9sDepyyTIykkEddR++y21CTdhGqKMr0Pujo8/QOyJuVXofdHT5+k9pi0zMrk5Pn5EHKWqShpXborOJA9gQI6zSVVk8I5vYVMj+o26Ye3MrOz7o/fpPbHRR1Z2vdHR5+gdkKZI2lQszlScpptIBsOdLZP/ACfCEsoUtSTtglMWytkaqKRIG26wRq7mV6H3R0efoHZENFUb9p90dPn6T2mDTN4ctl55meKaqsqedSRLCqtaQrrkkQaj5RlIEEkyE56W0z7XAfZDW5leh90fv0mJuZXofdHQfL0DsEKZh6uvYz6TTA4ARMAtKMj5wbULvWjjdPUiywpAnLG59Rkf/Wn4xoiiq9Dm5I3ZuPoHZE3Kr0Pujp8/Se0wpnWU7hsr+5+MjPdpqqxFg4QH+5xPcgR3J9NNVIXMk1bbMQ0PmcnD+5leh90fv0ntiCjK9D7o6PP0DsEKZiTuKS1Fd85JmE29ehJ/q+ETKFPNVwI8lVtswQl2csxCm74a3Kr0Puj98Q0ZWdn3R0+fpPaYtMw03GgGUMotIRwyoiciEznZMG4g3pInHMk5QacKkthYlImtP1bCSc0MhhYtBa92evy4tUc8pv3Z++KaOs8ZzrHyiDwFhsisVEEk4Ai4AYk5oNAH/9k="
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              Income protfolio
            </span>
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="data:image/jpeg;base64,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"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
            Speculative Portfolio
            </span>
          </a>
          {/* image - end */}
          
        </div>
        <div className="flex items-start justify-between gap-8 sm:items-center">
          <p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>
          <a
            href="#"
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More
          </a>
        </div>
      </div>
    </div>
    {/* gallery - end */}
    {/* stats - start */}
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        {/* text - start */}
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Team by the numbers
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* text - end */}
        <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
          {/* stat - start */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              200
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">People</div>
          </div>
          {/* stat - end */}
          {/* stat - start */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              500+
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">People</div>
          </div>
          {/* stat - start */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              1000+
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">Customers</div>
          </div>
          {/* stat - end */}
          {/* stat - start */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              A couple
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              Coffee breaks
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about us */}
  <section className="bg-gray-100" id="aboutus">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
          TalentSphere is an AI-powered portfolio builder designed to help professionals, students, freelancers, and job seekers create visually appealing and structured online portfolios without requiring coding or design skills. Our platform leverages automation, AI-driven content organization, and seamless integrations to simplify the portfolio-building process.
          </p>
        </div>
        <div className="mt-12 md:mt-0">
          <img
            src="https://blog.flipbuilder.com/wp-content/uploads/2024/01/Photography-Portfolio-Template.png"
            alt="About Us Image"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
  {/* why us  */}
  <section className="text-gray-700 body-font mt-10">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
      Why Us?
    </div>
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap text-center justify-center">
        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/512/1465/1465515.png?ga=GA1.1.1733521931.1740638147"
                className="w-32 mb-3"
              />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">
                Kate Berg
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                CFO
              </p>
              {/* social - start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </div>
          {/* person - end */}
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Ayo Ogunseinde"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">
                Greg Jackson
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                CTO
              </p>
              {/* social - start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </div>
          {/* person - end */}
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img
                src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Midas Hofstra"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">
                Robert Greyson
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                Creative Director
              </p>
              {/* social - start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </div>
          {/* person - end */}
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Elizeu Dias"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">
                John Roberts
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                Investor Relations
              </p>
              {/* social - start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </div>
          {/* person - end */}
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Matheus Ferrero"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">
                Judy Amandez
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                Senior Art Director
              </p>
              {/* social - start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </div>
          {/* person - end */}
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Leilani Angel"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">
                Rahul Williams
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                Creative Director
              </p>
              {/* social - start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </div>
          {/* person - end */}
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img
                src="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Jernej Graj"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">
                Ari Ferris
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                Marketing Analyst
              </p>
              {/* social - start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </div>
          {/* person - end */}
        </div>
      </div>
    </div>
    {/* team - end */}
    {/* call to action - start */}
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
          {/* image - start */}
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Andras Vas"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* image - end */}
          {/* content - start */}
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
              Help center
            </h2>
            <p className="mb-8 max-w-md text-gray-600">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Contact support
              </a>
            </div>
          </div>
          {/* content - end */}
        </div>
      </div>
    </div>
    {/* call to action - end */}
    {/* footer - start */}
    <footer className="bg-white">
      <div className="bg-indigo-500 py-6">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div className="mb-3 text-center md:mb-0 md:text-left">
              <span className="font-bold uppercase tracking-widest text-gray-100">
                Newsletter
              </span>
              <p className="text-indigo-200">Subscribe to our newsletter</p>
            </div>
            <form className="flex w-full gap-2 md:max-w-md">
              <input
                placeholder="Email"
                className="w-full flex-1 rounded border border-white bg-indigo-400 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-12 lg:pt-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div className="col-span-full lg:col-span-2">
              {/* logo - start */}
              <div className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <svg
                    width={95}
                    height={94}
                    viewBox="0 0 95 94"
                    className="h-auto w-5 text-indigo-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  Flowrift
                </a>
              </div>
              {/* logo - end */}
              <p className="mb-6 text-gray-500 sm:pr-8">
                Filler text is dummy text which has no meaning however looks very
                similar to real text
              </p>
              {/* social - start */}
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              {/* social - end */}
            </div>
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Products
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Overview
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Solutions
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Pricing
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Customers
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Company
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Investor Relations
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Jobs
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Press
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Support
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Documentation
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Chat
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    FAQ
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Legal
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Terms of Service
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Cookie settings
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
          </div>
          <div className="border-t py-8 text-center text-sm text-gray-400">
            © 2021 - Present Flowrift. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </section>
</>

    </div>
  )
}

export default Home