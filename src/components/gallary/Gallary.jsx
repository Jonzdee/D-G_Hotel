import React, { useState } from 'react';
import './gallery.css';


const images = [
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczOx8MM2rNJspVxaUXze0iFM5mo0T9YVia5Z8jlL5lebaUkcgUfH0H0qb85bR1r_wvlklqfS-OO9AJF5D6J-jTI-c1mHDCq--yI5iaLHh9rEWctSMS-vcHxIBFlgOUQlZ79e8E4PcZMa6Vl5oYUaI9c-qQ=w1391-h928-s-no-gm?authuser=0', category: 'All categories' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczO0RXHlD1DKcAi_I2AEfTYva7ZdCnEtqAmmYutPt8rjsHMdJR6LXl7BxnVTgZ5Ys623gpWA5iXcNvw1U3R6_y5nSPQmPFeilyFjE2fmCxCpfAdu59Azkun5Q0jR07kTqnMvhFKjHarcufN8t20WPfDrlQ=w1391-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczN9gxsBmpTaDcl6kJ3htmwplEw7InY3-BWX2BlAUupxwt9jKM7VhbE9jM-e3JN2rZ8h76JeBCFM4QvXuv3T9bN35ZTWzX1jXDpPnAX-ksenNKjAKyNjxbE7O7QZMlNdQT4x0DSwFYYBJG5OiGMjaNLLiQ=w1394-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczNCKnfSztksv_qZJbIkuTWo9IbMHDjosatdn3ScbdVmhLzxbvoruo90DSLrazayp6RovyXEhtJtmjVc98pLaJqrTlqvna7NrVYQsAPPf5ZUrSizq2PjhvrmhJ7k7umvnPzew0bNOCGQ4viIp1Hiar7ewtVVkxiRnunCdWOm9uvMOoFGRJE9Pa8HdMp4El1Nb9B9_KvUaBBPKbbelnKVR068oWb2yt0o8PwS92nE6NR9KLkcDW8FzeFE4IXiKlFwoD5mAjPBSDtHH5H9Z4Uz0EasX6IC-i14qNVSICLJMvGKsVJ_sCmu7iBsmvLNjbOHzY6VtBuyWaiHKr8wzlsCGCR117j6scVdvDxjY0MNYT4AnWq9MI6_iohlhrjT5-qsItLFcHFkw9jU3Fax9XhncLfOtr8-JzqiRaNTtFqRqF82hWbqP-N3_Jv9VopgbgRIjElW9PRzCJjrLW-_uQvuQdomTYpZzsFaIl9MGR9QGn66XOUsI5DLTe0F9VR-kG7Z_CtZLTbaTW5mAkK-qBnc_ARlBhEQyq0Egu3L_P8mCamLCESl2fyva2cVPo8k-2KR4IK3nOFymH7So-vzAngZyoLeLFkczISdsWCat-mroUi4bj69q1HqBpCEEPCY3UAewry1TfrlQ5ZH87yWm-70Gxm99BLN0QgbDML_zjswagdHkeVWrr75okJI-bnIAGxEj-aJU6Sq5jS_C0FBFwttHpXOgS9A0p85vFAYoX6mDbRYhS40LeEDx4AZHVoq74vscGyZ8pmS3MEpalSFaobTQhMYEiLEXYniU9_Z9apvbaCKQtpLP_PQPqYpRx-4B9rpc97Eg7o5JnPMF24cgKar0FA6LkdwkHJoLqQv1CMKad-HNSwvFaPzn_4vd-VaNBQS_hvjWrKUTXr_-6-awhQPLpIwZw=w1080-h720-s-no-gm?authuser=0', category: 'Gym' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczP-9jCrZ_vKugA0KwPWEwu5k2JNldIwmqeT5Xh-WaOKd7tBRK3sHP8Ak1mu7OV3NvnoHhpycfU5Kyk84y4OOwsBtM9WRDVchSFTgjbA41gKdKbfa1G7RSdsOHOgCOk3UbowKvk_s-JHnNsAAsZYYomPWQ=w1391-h928-s-no-gm?authuser=0', category: 'Pool' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczN-E6v2fuOAARtJAI9x5tqME9DO_t1nHqN2BFi_g_QY9-CXWx6b8yOnPogMdgT6HK3-oj7OP8vHKjK77KhAzMGBbLbrEzFhct6bpMzbsQsX8NJzlW8LnNig46GkZggxxdNwMMtI03tkueF8g-qf3ysQrg=w1391-h928-s-no-gm?authuser=0', category: 'Cool Bar' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczNIgppsG46jwAaqusKC9DK7HaqkPAnXJdRclg_-vEFZ6jyyUw_6SurBkkzvqHHZw9G4qs1vJ6RkC6t-MImJ0lHpZ583Q0OBarGkCDgCJQWCnMi83hB-lX_gmaSz6uH2mH0LxSik3VhnlQDDyI5CkV5Jgg=w1391-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczNdTq6nD5At8Du8HIGPyvfGahAw0zsiQiv7gke11hrL31btqSJcyr5ZSACjEMx4RT96RcSODOtyOt_Q5TApDQHS15-E0Sv-qSwv4qdUjQTR1belH6njPPy1duG5qD1w-sARkjh8ZerAsCA28lxDUYknnNiLMVfCL3FEGfO0ydaJpC-OgWqirTF-K38-TnWsNsCyv6uGqXoQLMunyp1JMe-uxsYDY1MYnx0myfhUHO86hNfGeTZLughbsehbcwBF82frEbk97vM7Rp66sZhKRvDp8xaDYhs_eA-29xHXlTFLsJzrBHqWjEpU0YOU8xL25gy_1HV04oUlynL0dlX7wORvxEkP7Fz-qQtuRIdiOKywoYZzOPoYoT_te4x4virH_ubxqRUGO3IXfSSukbesFFvJF8C6mqItDhUs_4qC-o8_ayQX58BjfdYxd407SJWYvzjQCjrAFIVuPt6sCt_WAyfhQj0BaMFbivhzYYlnv8TocVVqMfHIkOzb2NdThfsalaU8EuI5J2B-fdizot0f7LlKSDc7tHLJuAaAr_w_UJrdjrjdKfDrLWZ_CYvAywasbeXSCJnrTCbDbplUuHt4zCSpJFcB2P86jsYPma8vHbhZrYVeVna11Ews6D4XLAn3_R97p6UbC-renbgBRqHZJEyHVPpj1KicmgdK-8Bli9SBQRT3gxVF4YowvJyfvdfuBUIJ4O03shgKDhuItHdPCo4r2t3b2CRBq3I-r6e7YXRzkB__eMtmOVbx1ka5y_1RWprnszWHjko_2RfJQMTa2JweYwauOtzvmpeRsicXqGV3HpbPRlMeYpubcOl2XW-gYpJ6AqjHhFEkwwr9gq7SdBOzzAwSh4ZJ-JutS-NeTuzTohvp81avui4VdpTJeoKTWcz5wGsxJ5xGvDPukds7h7mxUA=w1080-h720-s-no-gm?authuser=0', category: 'Gym' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczNLzzZngN33pXiQaS_dmqknA3o1lLrhRG-JvMSK1jgq1lpZy9XjOG3fUfKpLpWkD2UOcnHIAQ_YS2wRug1ZILkX5xdg2EwwyK0tZfjqRoFumfRVHMbTsgS-J6scL4LCsnzuGoiFHRNhDNBCYDw1mfj1yA=w1391-h928-s-no-gm?authuser=0', category: 'Pool' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczOTkOb-YB1AE5t9Z_hfz9lb9oLSuW28FGLStzEJWAXmgOnV9Wfa367W2OXMlOU-kjLt-aUwkPLcbYLHa1Cd7X8TOaIRNn96-JwM2AR_VM58oVGo4zbOY7rcdx9N40LaXgBIF9z6vRX1Y4GK4ednh2L6fQ=w1395-h928-s-no-gm?authuser=0', category: 'Cool Bar' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczPfW_Lf_U607h3ZvI6updqwNtJ6cILdYiKFSOOFdTjdrhuXJ2ccuGQobaLxCajQ934rY4iWCNDdypMAR5Yff9XryoVx8l1stWkPUffX-zma3Bnr22uNOLeqNcE7iZypDIOSsc4N7-bMnMJcZPcdiB4YCQ=w1391-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczOdQ_H9oUtGl43y1BP-0DR14tCm6Twfz9666xDwF0jA5AR1Fkp2TsNIoaVYVomzJa18dUbWyMW2IzHf6nqiqLz-mKzulq4rXjT7m5MKYT8D0P0vbsX0kpi8nV2ov74SQNU7k0HGTwEVu08wGvRnjSr71SZGgQXVW_lygBCzmlVZzNqoudOQuG9zSKb5KD5JGaABEglKNBjgHtmla3iL-GWrka9rD6QsiehplWMkU4DLsOLvHUeIcxjGJ8xqJtAyrcfe_79c1RyXlIuESdyBYX3_KigpWo6dbjGEn4X4xqfgz3NpiO3qZReK1Fstbxcvg1jJDJNVxN5r0zvy6A2vdRS9p6AOlpiSlN8Gw0u4-Y0OvP-c0Pgi_HHIg1WGDx67e_LOteABDZaJgdV5QozfS21gSQ5wU6JUkkm8PSo_rKaANwM_d24bOHTqO-Sk7Y87eEbBr3V7llqXP_PNyE1cqSPzL3TAwvFtP5ZLiN6xd1j6LqdWa7dGpUh8khQTSOoENN1aaq5ewaO30qFHnX-n2bZ5x2IrAoBKYmPQCj8Ck5id_Wsdn5_W-VbuDTw3P0gY5bLvFR1JowXjMWKikX0mt2hnALV-Nr4jFrvFyZZcoMjJrh8Pp1KjpgOHRzqF7OHD9ZIlvGDsrlopg7z03FqkswrjTgX3lS8PLIHH1q4vKU9GDeG3d1EGrzb8-1NfydQI2Hi4Kd8_Q-CKUi8HngWCxkkscUjJt-E_o1vA_xm_2JepJ0AZB3mtKN-lGxR3sfysW7jEyLZMF0q6OpvybQ7HXq7E-_hqq9_sDpILeoxNRcSJjvFsm22wPTExDTG9fuVf47LlhUiuu92AXJ2fCE8CCDSSucxSH0QkXTH8DBQ_3zX9ZtWYXBmYa5vapyrUedF3yf3CFWBeP4UJu2IOmdGKp1mx5A=w1080-h720-s-no-gm?authuser=0', category: 'gym' }
];

const categories = ['All categories', 'Event Hall', 'Gym', 'Pool', 'Cool Bar'];	

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredImages = selectedCategory === 'All categories' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div >
      <h1 className='text-4xl font-medium text-center'>Our Gallery</h1>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        
        {categories.map(category => (
          <button
            key={category}
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${
              selectedCategory === category ? 'text-blue-700 border-blue-600 hover:bg-blue-700 dark:border-blue-500 dark:text-blue-500' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="masonry-grid grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <div key={index} className="masonry-item" onClick={() => handleImageClick(index)}>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src={image.src} alt="" />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <button className="absolute top-5 right-5 text-white" onClick={closeModal}>Close</button>
          <button className="absolute left-5 text-white" onClick={handlePrev}>Previous</button>
          <img className="max-w-full max-h-full rounded-lg" src={filteredImages[selectedImageIndex].src} alt="" />
          <button className="absolute right-5 text-white" onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
