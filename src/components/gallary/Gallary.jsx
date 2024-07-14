import GalleryContainer from './GalleryContainer';


function Gallery() {

  const galleryImages = [
    {
      img: 'https://lh3.googleusercontent.com/pw/AP1GczOx8MM2rNJspVxaUXze0iFM5mo0T9YVia5Z8jlL5lebaUkcgUfH0H0qb85bR1r_wvlklqfS-OO9AJF5D6J-jTI-c1mHDCq--yI5iaLHh9rEWctSMS-vcHxIBFlgOUQlZ79e8E4PcZMa6Vl5oYUaI9c-qQ=w1391-h928-s-no-gm?authuser=0'
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczN4rf_pxCxUoFVnVs99tAyC5cfXnzm45wPSs3ej0HE0_o2OsAHqDM8NeUgTJLTKe6GkJuTQ3VpzNE2K7ScNY2aJfXv0sUREYZh3jhCO1s7L7NPdqEIHD6HGxD6Co9M5pyqHZDgUaWpRom-B2QbxH5sBRw=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczNPIx7g5f67cxKplnpTs-SnTMlY6wytTmlmUEg_kz37p9rnuA5F0L0tCBc2pdq1N1_qWz-JmnN9h6YlMWvI4sjknrPzwpsZVqpmVXzNMuYkL38_UvbCWZWfOKNXf0L6YL1rDY26LktdQ3NnOjqieLpe4g=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczO0RXHlD1DKcAi_I2AEfTYva7ZdCnEtqAmmYutPt8rjsHMdJR6LXl7BxnVTgZ5Ys623gpWA5iXcNvw1U3R6_y5nSPQmPFeilyFjE2fmCxCpfAdu59Azkun5Q0jR07kTqnMvhFKjHarcufN8t20WPfDrlQ=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczMcgsIatvi4vEV7JjpK2Jc4nrMix79tIVEylr0WX-5__h4qfHuUaqXqA1FQ6pvYl_ZpAnkCgSxeqhQoVO_AZezTirWl9Y7rg7mi2IgLZDQ8rF9HRFL8QKzO-LJfPpXym13NLPDViEgZGrrm8l4xny96kg=w618-h928-s-no-gm?authuser=0"
    },
    {
      img: 'https://lh3.googleusercontent.com/pw/AP1GczMThI_P1goxFOXgyJPRdwW3a6BMMUjKLmsWvNZPWlpxKsX_-ko1wc-LjTcMhuAMSSRG5RaAGO4bnL4MuUOQzt1J1ERLg9ulUhhwu-NOaGptc3UB2OFH2MPsWQcaYgh2yC8Ld2vlJMjYQFFG1enUGQKKAQ=w1394-h928-s-no-gm?authuser=0'
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPXkUhmhWVLV_JZwfW9eHXLCJ9RKgjmnyqJWp7TMbC7PigF7nltv032HVJ6AU_v6gMdEFQwJo1zBURNtR3AhL24vssE_IRzAncnLvjy-r9s0PTiSTGPraswXOV_EKQ5hPcshPArs0NiK_gPEcCvaevFBg=w1394-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczNvlbV22tJYwPdzLASJsolqBIHjFZQXAq5GkNAOqUdJXUwUWYDA-tmjp5GZW9MJa7Lk87OoK7gZp-4VLzyWanNXOkSrpW2Fi_Uf7TnmzH5_AudGbaeMOaCQp-YWSQl4BVvO6fFICqiIynLnjtLI3V-vYQ=w1394-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPn6C1XTZ6t0D1S_TneUOWY9lwQY04oYY2SwxOwvdxembyyAFk8MwVxYaMpVO6Samx_CYttOrwYBRo6l7BtiKX5QEStEVg2ccAgmPY0swTxNnxm1HrbYs14Qzh49E2oSnQGycRgz5zlQoaNSImefRQvww=w1394-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczNuLjKL1CVzJe2tRTMpdPPNM_WUIYpuEHTosmcp8OaIjMC_sFFCq3qeh7ch-8lGCQKz2moczixMSp76g_4zWG3yOynTUywJJg024JTiQXf1NeEROuhRskB2BymvR8J341g_WNdu90vv4PjAQ0gQ-WysQw=w1394-h928-s-no-gm?authuser=0"
    },
    {
      img: 'https://lh3.googleusercontent.com/pw/AP1GczP-9jCrZ_vKugA0KwPWEwu5k2JNldIwmqeT5Xh-WaOKd7tBRK3sHP8Ak1mu7OV3NvnoHhpycfU5Kyk84y4OOwsBtM9WRDVchSFTgjbA41gKdKbfa1G7RSdsOHOgCOk3UbowKvk_s-JHnNsAAsZYYomPWQ=w1391-h928-s-no-gm?authuser=0'
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPvZlix0mzGng9t-5tNUZP05vJwgL6QaBe7at_yXt35Bn_DKV1hjiAPUcft59AE_GKChjtD1K9HliJP-yQkTDfuFcPgLJpWHSSPxXLOwno2J0M36ZVdhagiX4ZysGHaji221HuzdmytSqWwOTk2KNEMpg=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczMMCDnW32sLGIsnWbmGCwpG0Ur1yilmY4yKKFpWnvsEpZ0mSsLtHfhbpddLcVuLYg-heeXphzj5oCIG6m48-_yIhx5N70Vz8HPdIxEKHkNbf9eGaSfDzi7SsWmRWtLDSXAUOPNGJa7p-v07xC9lAYblZQ=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczN4J-vF8umVRXqPISxzhW22bDsU5zrYBFYqPLqMsks6CzchMv-v7No2Uj90Rz3Hhb1ls5cy-Dil4FfzyRB0phceEuVQMFCORNzC2sTm8WHElbCqanBtweVbWGJKrjHmxNpihSBNNrCwL6NJxVHst-xnQw=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczOypCEaf7O_pHdD3Qx9JbD7QK7IwvFkc30srl8aqG1InLayq9nh5BSWYizonHWRGaF5Xli0x4wmtZ11pVTDToMYHdTuUQ3uAeX5-ldJuazxhaOAveXHWMrmF1RGtIk6LmaVpo_NIDINA2uEamYWm3nPRQ=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: 'https://lh3.googleusercontent.com/pw/AP1GczMzEIev65fT8nqFR4vAZ_e8Gx_hQlLtq-fuoUYq85qq3Mu5zGEXUrFFcdyHU3GCXZf1X6KprWkXxjBvXWnM3aWdFjgsyHgt4pZdM7WMWMW2PLgdz2F8LbCgO-suVzG7kJAnp_wOV7t5lzYXhJMnnYDueQ=w1391-h928-s-no-gm?authuser=0'
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczOZ25AjWLjB5mA33FLIZRhWIGpMrXVJBB-TgYfjJhKvJSR-LjXE5HAE2FNnM6MCOQJPdQ7jksODi8SN539Lru2hX6lUUIWOWFekAP43t44nykloa0yCpJkU7uV3lTRv4JPMkWNZR0_3swbrEOZkAqXuBg=w1395-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczMUOHUGt4fyH9MCoNLDeckB5f6FuK9_xTFhV46F70tKSQVgEOGacfnnfkU9VBxYv5lKlo7wiV4_jxeX4wXi9xrJeAiE7brURNQisnDkcMmBVC4AmFQjw1vMENssSUPMcut5EXiX48upyH4X6JLYzaZXEg=w1395-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczOTkOb-YB1AE5t9Z_hfz9lb9oLSuW28FGLStzEJWAXmgOnV9Wfa367W2OXMlOU-kjLt-aUwkPLcbYLHa1Cd7X8TOaIRNn96-JwM2AR_VM58oVGo4zbOY7rcdx9N40LaXgBIF9z6vRX1Y4GK4ednh2L6fQ=w1395-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczOp2QQvFY4oGmsdxqAr7jvzLH58TSzkOy8tkDxCLS6u7drG6_d_VtJ78XV2Ypqpyqew2QkwK30DLPRR4zLcV_PdQhS2QM5yrT_RgYXzZ8ZTNhWPhtLkAlhEZ4-ceMHjQCKUxkisfJDKSm4heSYLEkL70w=w1395-h928-s-no-gm?authuser=0"
    },
    {
      img: 'https://lh3.googleusercontent.com/pw/AP1GczMtM4GwCGaI6nElqkp3XlJob04N_w8IPFP3ykOQC7vT397K7_Js5W1H0cSXDHV0YDMnn3_TBlwAljgfyFi_s_1gUmD2UiZsAiJiPvWIaONO-TUSoSIgS82LSvJnBKr9J2BoSAHQJWsvwNe3xvigR0coFQ=w1391-h928-s-no-gm?authuser=0'
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczNYJlTM7n8XHc6HHeAhmwNhMPBfzMmUb6-Kvg5jJ9KAMlkTb-knLwtASj7A1A22ix5ZW-zeGZU8hPyQfLbgrhmUvv7UrpzIrC5qfvO51xYyBUtJ77BafnjA3PylWP3EEY42V8uSVBWZiBYF0mkNgoGW0Q=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPXA8_DfyZLb3HkG9a9s5EqQjZVygKizkbvidylC7kpaA0a3EeOh86DSTSGvk49SQ0wmjrSXAEdIh0-jQuDKCs2WvmEgbGMnwaey86QKRNsxyvKEPokHCcmzhZmPiEX7RKyPHCEyagKs4nsdXtKwaNTtw=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczNKpPK4IQBOJ64RlKC-p2P8y9_EVyQAqaZZRWUT7WHMNS0D5dR9Sl_E7ft2U59Xz_qrLy-oqYUXVm0JOhUEfVcu7j6bm5PQARMoBaPYBMYZwBBjkdDZZsbjaKto9NcqlKKLhaX7SPEOqwj5JdfFnTPG3Q=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPiuotgjJ0v-uuNYzWMS-vN3myaIZ3IRvQWQEMxFYqXc2DvdsrTBoDnQC14bBOEWF1ZCMOYhSbdNAcrQwK8nJ_DL3X0Gy4BxQez_yXA_NikygAEOHecVZ72cAGEQ3SM5PnH_tpnF4I9K30jBvQEI_PFMw=w619-h928-s-no-gm?authuser=0"
    },
    {
      img: 'https://lh3.googleusercontent.com/pw/AP1GczMDcUGyfCd0VbXlNeA2e0wy-CTEjb2D4K4HmQImg-zQErTJbi-sliUCfKWGCClf6Y4cRW7u8Vilui9soUHHJnzixVYitQMGYAY6w8N7A0ETYfREaA3FfS5mn88EZDG5QxVWGN1q9mRDYgWGR19NiQRR_w=w1391-h928-s-no-gm?authuser=0'
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczOryCJoR6TBDVSB5uibSCVcN2ZvFqQGktgsBeJfGkVIJrUdBaWzuN14ohoDF1770UXdAKM4TvG8wbF35oc9nLFGpXj86tsYJU4zT61zd4ifn9Ak6F85A4MeDIIkAuk8I1weKtehgi_qvFuTRmtEVBD8_g=w751-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczMzzXn6n0OLs7orhNxyU7u8y5u3tk4RGIKWLg2ULKsW0QobwaYxaCMs2NKCdWEVIGKN_URALl-_tn-audbEJFTgNwR-ZXv4hEQknrMsCI0CpkJx87Fx6gZ0AyKbtxBbkR49rixcjSFB6uXVKD39WqrR6g=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczN6ZnBiNzEzAt7JLu5UpiKBhBulri9WQBIeA3Mx7ztb7FAb_Yf1g3MFjq4gaxIS10oEq-4bpsO3kF4MNWRutn3Iw8UQubdtqPfYb0lmd0Urn4DQ7X1Oa0HLn5xyWO0UNcziYO5PNxgwJYohqAIBGn8l4Q=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczM_-6eXbrnAkoAOxeM_iQsBQVo-GsQT8Hfb8yBb4VsNqTG-qiUPfUg1eqDalyc6VIK4rL_yv7vU6vQ75a3tjpsXpZKVgFkGP235xB1F4FpQqrdNAWO2SqDWdsd8ie-B3C4Y2ix6HwsPcTkDtuZe5lmpJA=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczNOiMlrTlZghYq8DiQwTjDZUyN6I7maA8z47k5kEThcJzR0GdQFHltIaKp2ivGABd8uM3GSAe6qEWko1_82wlvWO5QC-TseUxRSNqgd2UlBdmIPipfHFemGz6Pq1lNtid1oGUkNPOAqnqkGYQEsG-wepg=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPa7pplF2L4pXhhAyVWE2bWPVxgwW9bSuqSZbCGGWjHshvBn8uXhVdISIpbNftZpnVZLJ6yAdWQVoPKhiJKbqGKHaWRJIyLYqMmHqQZqL65tilh6uzPRqEz5CFAOwG69122ZVhFKgdm75Xcm1Io-GCpqw=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczN-E6v2fuOAARtJAI9x5tqME9DO_t1nHqN2BFi_g_QY9-CXWx6b8yOnPogMdgT6HK3-oj7OP8vHKjK77KhAzMGBbLbrEzFhct6bpMzbsQsX8NJzlW8LnNig46GkZggxxdNwMMtI03tkueF8g-qf3ysQrg=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczOz7CMzLgnxnYmjme_e8D4wom0ClQiyu1voHKf24ZyxLFwIW9rRcb0cLMFfcEbnOri7S_G4WfnRgMIrb09AiJT5N8_yzKDgYigGIGdw8vhGwrNJgKeiKE6KUIOY-zoet5i3tLezsFeg19JWMGyDD4uHkw=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPfW_Lf_U607h3ZvI6updqwNtJ6cILdYiKFSOOFdTjdrhuXJ2ccuGQobaLxCajQ934rY4iWCNDdypMAR5Yff9XryoVx8l1stWkPUffX-zma3Bnr22uNOLeqNcE7iZypDIOSsc4N7-bMnMJcZPcdiB4YCQ=w1391-h928-s-no-gm?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczMvrHdRwVzrUsgWT26gXV5Lu6jI5Ul_-A6T02-eiBBJSDRZkWtrSdGh8z6V_HaIji4QVX6AwMtt0wUgd3W8y7ylGl-GoVmQxHvgkovap5qoIPSQ47Q4f0Nr3n9wByQTXShULnokTmBuyy5IaE4CQPAQJQ=w1391-h928-s-no-gm?authuser=0"
    }
    
  ]

  return (
    <div className="App">
      <br />
      <div className='text-center text-2xl'>
        <strong>D&G Photo Gallery</strong>
      </div>
      <br /><br />

      <GalleryContainer 
        galleryImages={galleryImages}
      />

    
    </div>
  );
}

export default Gallery;
