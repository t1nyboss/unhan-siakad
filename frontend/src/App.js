import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div className="header">
        <div className="logo-image pull-left">
          <img src="/themes/unhan-new/assets/img/logo-unhan.png" alt="" />
        </div>

        <div className="logo pull-left">
          <span>Universitas Pertahanan Republik Indonesia</span><div className="logo-deskripsi logo-adress">Kawasan IPSC Sentul, Sukahati, Kec. Citeureup, Bogor, Jawa Barat 16810 - Telp.(021) 87951555</div>
          {/* //<!-- toggle menu responsive --> */}
          <a className="btn btn-navbar btn-link pull-right legitRipple" data-toggle="offcanvas" href="#"><i className="icon-three-bars"></i></a>
        </div>

        <div className="logo-image pull-right">
          <img src="/themes/unhan-new/assets/img/logo-kemenham.png" alt="" />
        </div>
      </div>
      {/* <!-- END header --> */}
      <div className='wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 sticky'>
              <div id="sidebar_wrapper">
                <div id="sidebar">
                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">NAVIGATION</h6>
                      <ul className="list-group list-group-flush sticky" id="sidebar-menu">
                        <li className='list-group-item'><a href="/site/index" className="legitRipple"><i className="fa fa-home msa"></i>Beranda</a></li>
                        <li className='list-group-item'><a href="/admission/umum/agreementS1" className="legitRipple"><i className="fa fa-edit msa"></i>Pendaftaran Program Sarjana (TESTING)</a></li>
                        <li className='list-group-item'><a href="/admission/umum/agreementS2" className="legitRipple"><i className="fa fa-edit msa"></i>Pendaftaran Program Magister (TESTING)</a></li>
                        <li className='list-group-item'><a href="/admission/umum/agreementS3" className="legitRipple"><i className="fa fa-edit msa"></i>Pendaftaran Program Doktor (TESTING)</a></li>
                        <li className='list-group-item'><a href="/admission/schedule/entranceList" className="legitRipple"><i className="fa fa-clock-o msa"></i>Penerimaan Mahasiswa Baru</a></li>
                        <li className='list-group-item'><a href="/calendar/listCalendar" className="legitRipple"><i className="fa fa-calendar msa"></i>Kalender Akademik</a></li>
                        <li className='list-group-item'><a href="/site/login" className="legitRipple"><i className="fa fa-sign-in msa"></i>Login Pendaftar</a></li>
                        <li className='list-group-item'><a href="/site/sso" className="legitRipple"><i className="fa fa-sign-in msa"></i>Login Staf dan Mahasiswa (SSO)</a></li>
                        <li className='list-group-item'><a href="/site/ssologout" className="legitRipple"><i className="fa fa-power-off msa"></i>Logout SSO</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">Aplikasi Mobile</h6>
                      <ul className="list-group list-group-flush sticky mb-10" id="sidebar-menu">
                        <li className='list-group-item'>
                          <a href="/site/DownloadAPK" className="legitRipple">
                            <i className="icon-download msa"></i>Download My UnHan
                          </a>
                        </li>
                        <li className='list-group-item'>
                          <a href="https://drive.google.com/file/d/1lDKTBf1dPRzL6w5z6PJaFtDw7axi4XmZ/view" className="legitRipple">
                            <i className="icon-file-text2 msa"></i>Panduan My UnHan
                          </a>
                        </li>
                        <li className='list-group-item'>
                          <a href="https://github.com/LeonColt/libunhan/releases/download/v1.0.1%2B52/libunhan.apk" className="legitRipple">
                            <i className="icon-download msa"></i>Download Mobile Pustaka Versi Android
                          </a>
                        </li>
                        <li className='list-group-item'>
                          <a href="https://github.com/LeonColt/libunhan/releases/download/v1.0.1%2B52/Panduan.Pemustaka.Android.pdf" className="legitRipple">
                            <i className="icon-file-text2 msa"></i>Download Panduann Pemustaka Versi Android
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">Aplikasi Desktop</h6>
                      <ul className="list-group list-group-flush sticky mb-10" id="sidebar-menu">
                        <li className='list-group-item'>
                          <a href="https://github.com/LeonColt/libunhan/releases/download/v1.0.1%2B52/libunhan.exe" className="legitRipple">
                            <i className="icon-download msa"></i>Download Mobile Pustaka Versi Desktop
                          </a>
                        </li>
                        <li className='list-group-item'>
                          <a href="https://github.com/LeonColt/libunhan/releases/download/v1.0.1%2B52/Panduan.Pemustaka.Desktop.pdf" className="legitRipple">
                            <i className="icon-file-text2 msa"></i>Download Panduan Pemustaka Versi Desktop
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="portlet" id="yw0">
                    <div className="portlet-content">
                      
                    </div>
                  </div>
                  <div className="portlet" id="yw1">
                    <div className="portlet-content">
                      


                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              <div className="content">
                <div className="row">
                  <div className="col-xs-12 col-md-6 col-lg-4 offset-lg-1">
                    <h1>Login</h1>


                    {/* <!-- <form id="login-form" action="/site/login" method="post">
                    <div className="form-group">
                      <label htmlFor="LoginForm_username" className="required">Username <span className="required">*</span></label>                <input className="form-control w100" name="LoginForm[username]" id="LoginForm_username" type="text" />                            
                    </div>

                    <div className="form-group">
                      <label htmlFor="LoginForm_password" className="required">Password <span className="required">*</span></label>                <input className="form-control w100" name="LoginForm[password]" id="LoginForm_password" type="password" />
                    </div>

                    <div className="checkbox" style="display: block;min-height: 20px;padding-left: 20px;margin-top: 10px;margin-bottom: 10px;vertical-align: middle;">
                      <input id="ytLoginForm_rememberMe" type="hidden" value="0" name="LoginForm[rememberMe]" /><input name="LoginForm[rememberMe]" id="LoginForm_rememberMe" value="1" type="checkbox" />                <label htmlFor="LoginForm_rememberMe">Remember me next time</label>                            
                    </div>

                    <button type="submit" className="btn btn-block btn-primary legitRipple"> Login <i className="fa fa-sign-in"></i> </button>
                    <hr />
                    <div className="pull-right">
                      <a href="/site/forgetPasswordReg">Lupa password pendaftar?</a>            
                    </div>

                  </form> --> */}

                  </div>
                  <div className="col-md-6 col-lg-8 text-center">
                    <img className="" src="/images/login.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      <footer>
        <div className="container p10">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-6 copyright">
              Copyright © 2022 by <b>Universitas Pertahanan Republik Indonesia.</b> <br />
              <span>Powered by <b>EUIS</b> &amp; <b>Yii Framework</b></span>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 btn-footer">
              <div className="pull-right" id="introFooter">
                <a className="btn btn-link legitRipple" target="_blank" href="https://www.idu.ac.id/"> <i className="icon-earth"></i> </a>
                <a className="btn btn-link legitRipple" target="_blank" href="http://lib.idu.ac.id"> <i className="icon-book"></i> </a>
                <a className="btn btn-link legitRipple" target="_blank" href="https://web.facebook.com/universitas.pertahanan"> <i className="icon-facebook"></i> </a>
                <a className="btn btn-link legitRipple" target="_blank" href="https://twitter.com/univ_pertahanan"> <i className="icon-twitter"></i> </a>
                <a href="/site/DownloadAPK" className="btn btn-link legitRipple" id="introDownloadApk">
                  <i className="fa fa-android msa"></i><span className="desktop">Download Aplikasi Android</span>
                </a>

                <a href="#" className="btn btn-link desktop legitRipple" id="introLayoutSetting" onClick="openSettingLayout();return false;">
                  <i className="fa fa-cog msa"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
