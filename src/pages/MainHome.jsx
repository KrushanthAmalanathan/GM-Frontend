import React from 'react'
import card15 from '../../public/kru/pic1.jpg';
import card16 from '../../public/kru/pic2.jpg';
import card17 from '../../public/kru/pic3.jpg';
import Footer from "../components/footer/Footer";

export const MainHome = () => {
  return (


    <div>
      <div style={{
        backgroundImage: "url('https://www.blue365deals.com/sites/default/files/styles/1240x710_cropped_2x/public/images/AFD_D_V_Lifting_2400px_by_1350px.png?h=618493a0&itok=SuEq0vZF')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '100%', margin: '0 auto', padding: '1rem'

      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '1rem' }}>
          <header style={{ padding: '1.25rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '1.25rem' }}>Life Touch Fitness</div>
            <nav>
              <ul style={{ display: 'flex', gap: '3rem' }}>
                <li><a href="/MainHome" style={{ color: 'white', textDecoration: 'none', ':hover': { color: '#d1d5db' } }}>HOME</a></li>
                <li><a href="/csfitness/home" style={{ color: 'white', textDecoration: 'none', ':hover': { color: '#d1d5db' } }}>Class & Schedule</a></li>
                <li><a href="/TrinerHome" style={{ color: 'white', textDecoration: 'none', ':hover': { color: '#d1d5db' } }}>Personal Traniner</a></li>
                <li><a href="/StoreShoppingPage" style={{ color: 'white', textDecoration: 'none', ':hover': { color: '#d1d5db' } }}>Supplement Shop</a></li>
                <li><a href="/INSTRUCTORS" style={{ color: 'white', textDecoration: 'none', ':hover': { color: '#d1d5db' } }}>INSTRUCTORS</a></li>
              </ul>
            </nav>
            <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', ':hover': { backgroundColor: '#dc2626' } }}>Login/User</button>
          </header>


          <div style={{ textAlign: 'center', color: 'white', padding: '2rem 1rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>SHAPE YOUR MUSCLE WITH US</h1>

            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>WE HAVE 1500M2 OF MODERN SPACE TO EXERCISE</p>

            <button style={{ backgroundColor: 'white', color: '#9CA3AF', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', ':hover': { backgroundColor: '#f3f4f6' } }}>LEARN MORE ABOUT THE GYM</button>
          </div>
        </div>
      </div>

      <div style={{
        backgroundImage: "url('https://individualfitnessllc.com/wp-content/uploads/2020/10/gym.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '4rem 1rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>PROFESSIONALS</h1>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '3rem' }}>WE HIRE ONLY HIGHLY QUALIFIED PROFESSIONALS</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ width: '100%', maxWidth: '100%', padding: '1rem', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', width: '10rem', height: '10rem', overflow: 'hidden', margin: '0 auto 1rem auto' }}>
                <img src={card15} alt="Catherine Johnes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>CATHERINE JOHNES</h3>
              <p style={{ textAlign: 'center' }}>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat.</p>
            </div>
            <div style={{ width: '100%', maxWidth: '100%', padding: '1rem', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', width: '10rem', height: '10rem', overflow: 'hidden', margin: '0 auto 1rem auto' }}>
                <img src={card16} alt="Gregory Williams" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>GREGORY WILLIAMS</h3>
              <p style={{ textAlign: 'center' }}>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat.</p>
            </div>
            <div style={{ width: '100%', maxWidth: '100%', padding: '1rem', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', width: '10rem', height: '10rem', overflow: 'hidden', margin: '0 auto 1rem auto' }}>
                <img src={card17} alt="Dennis McGregor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>DENNIS MCGREGOR</h3>
              <p style={{ textAlign: 'center' }}>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button style={{ backgroundColor: '#fuchsia', color: 'white', fontWeight: 'bold', padding: '0.5rem 1.5rem', borderRadius: '9999px', ':hover': { backgroundColor: '#fuchsia' } }}>SEE ALL INSTRUCTORS</button>
          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: "url('https://www.blue365deals.com/sites/default/files/styles/1240x710_cropped_2x/public/images/AFD_D_V_Lifting_2400px_by_1350px.png?h=618493a0&itok=SuEq0vZF')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

          <div style={{ width: '100%', md: { width: '50%' }, padding: '1rem' }}>
            <div style={{
              backgroundImage: "url('https://www.shutterstock.com/image-photo/athlete-man-preparing-protein-cocktail-600nw-1903589083.jpghttps://placehold.co/600x400')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '16rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', padding: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>45 TONS OF FREE WEIGHTS</h2>
                <p style={{ marginTop: '0.5rem' }}>Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum.</p>
                <br />
                <button style={{ marginTop: '1rem', backgroundColor: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem' }}>READ MORE</button>
              </div>
            </div>
          </div>


          <div style={{ width: '100%', md: { width: '50%' }, padding: '1rem' }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', padding: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>HIGH-END EXERCISE EQUIPMENT</h2>
                <p style={{ marginTop: '0.5rem' }}>Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus.</p>
                <br />
                <button style={{ marginTop: '1rem', backgroundColor: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem' }}>READ MORE</button>
              </div>
            </div>
          </div>



        </div>



      </div>
      <Footer />
    </div>

  )
}

export default MainHome;