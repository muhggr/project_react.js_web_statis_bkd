import Hero from "./Hero";
import CardKegiatan from "./CardKegiatan";
import Cardsub from "./Cardsub";
import sub1 from "./../assets/2.jpeg"
import sub2 from "./../assets/8.jpeg"
import sub3 from "./../assets/9.jpeg"
import content1 from "./../assets/1.1.jpeg"
import content2 from "./../assets/1.2.jpeg"
import content3 from "./../assets/1.3.jpeg"
import content4 from "./../assets/1.4.jpeg"

const Main = ()=>{

    return(
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5" >
                        <h1>Sub Bagian Data dan Informasi</h1>
                    </div>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-12">
                            <Cardsub image={sub1} sub="Sub Data dan Informasi" />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cardsub image={sub2} sub="Sub Permutasian" />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cardsub image={sub3} sub="Sub Penghargaan dan Jabatan" />
                        </div>
                    </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    {/* <div className="col-12 my-2">
                        <CardKegiatan image={content1} desc="Kegiatan Apel Pagi di Badan Kepegawaian Daerah Provinsi Jambi" />
                    </div> */}
                    <div className="col-12 my-2">
                        <CardKegiatan image={content2} desc="Sosialiasi E-KGB (Electronik Kenaikan Gaji Berkala) Jambi" />
                    </div>
                    <div className="col-12 my-2">
                        <CardKegiatan image={content3} desc="Kegiatan MTQ Kopri V" />
                    </div>
                    <div className="col-12 my-2">
                        <CardKegiatan image={content4} desc="Apel Bersama Gubernur Jambi" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;