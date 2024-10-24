const domain = "https://tl-shop-8b8514452c4e.herokuapp.com"; //http://127.0.0.1:8080 / https://tl-shop-8b8514452c4e.herokuapp.com
const imageBaseURL = "https://github.com/LucPham2004/TL-Shop/raw/main/src/main/resources/static";
document.addEventListener("DOMContentLoaded", function() {
    
    const headerHTML = `
    <header>
        <div class="header-container">
            <a href="index.html">
                <div id="logo">
                    <img src="assets/img/logo/logo.webp">
                    <span style="font-size:large;font-family: serif;">BigFoot</span>
                </div>
            </a>
            <div class="header-menu d-none d-lg-flex">
                <a href="about.html"><div class="header-item">Giới thiệu</div></a>
                <a href="news.html"><div class="header-item">Tin tức</div></a>
                <a href="contact.html"><div class="header-item">Liên hệ</div></a>
                <h5 style="margin-bottom: 12px; margin-left:10px; align-self:center; color:rgb(89, 89, 89);">|</h5>
                <a href="shop.html"><div class="header-item" style="width:150px;">Tất cả sản phẩm</div></a>
                <a href="shop.html?category=Adidas"><div class="header-item">Adidas</div></a>
                <a href="shop.html?category=Nike"><div class="header-item">Nike</div></a>
                <a href="shop.html?category=Thể Thao"><div class="header-item">Thể Thao</div></a>
                <a href="shop.html?category=Giày Da"><div class="header-item">Giày Da</div></a>
            </div>
            <div class="header-rightPart">
                <div class="search-box">
                    <input type="text" id="searchInput" placeholder="seach..."/>
                    <button id="searchButton" title="search" type="button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart" class="cart" style="text-align: center;">
                    <i class="fas fa-cart-plus" style="font-size: 30px;text-align:center;"></i>
                </div>
                <!-- Hamburger icon for mobile -->
                <div class="d-lg-none">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                        <img class="navbar-toggler-icon" style="width:40px;height:40px;" src="assets/img/logo/menu-bar.png">
                    </button>
                </div>
            </div>
        </div>

        <!-- Offcanvas menu for mobile -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <a href="index.html"><div class="header-item">Home</div></a>
                <a href="shop.html"><div class="header-item" style="width:150px;">Tất cả sản phẩm</div></a>
                <a href="shop.html?category=Adidas"><div class="header-item">Adidas</div></a>
                <a href="shop.html?category=Nike"><div class="header-item">Nike</div></a>
                <a href="shop.html?category=Thể Thao"><div class="header-item">Thể Thao</div></a>
                <a href="shop.html?category=Giày Da"><div class="header-item">Giày Da</div></a>
            </div>
        </div>
    </header>
    
    <!-- Cart -->
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasCartLabel">Giỏ Hàng</h5>
            <a href="payment.html"><div class="orderBtn">Đặt hàng</div></a>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div id="cart-items"></div>
        </div>
    </div>
    `;

    const footerHTML = `
    <!-- Button scroll to top -->
    <button onclick="scrollToTop()" id="scrollToTopBtn" title="Go to top">
        <span class="fas fa-arrow-circle-up"></span>
    </button>

    <!-- Footer -->
    <footer>
        <div style="background-color: black;display:flex;justify-content:center;margin-top:5%;">
            <div id="a-bar">
                <p>Rất nhiều sản phẩm bạn có thể lựa chọn</p>
                <a href="shop.html"><button class="shopNow-btn">Xem Tất Cả Sản Phẩm</button></a>
            </div>
        </div>
        <div class="container-fluid p-0">
            <div class="footer-top">
                <div style="display: flex;flex-direction:row;gap:20px 0;width:100%">
                    <div class="footer-links">
                        <a href="">Trợ giúp</a>
                        <a href="">Liên hệ</a>
                        <a href="">FAQs</a>
                        <a href="">Tìm cửa hàng gần bạn</a>
                    </div>
                    <div class="footer-links">
                        <a href="shop.html">Tất cả sản phẩm</a>
                        <a href="">Trạng thái đơn hàng</a>
                        <a href="">Thông tin vận chuyển</a>
                        <a href="">Trả hàng</a>
                    </div>
                    <div class="footer-links">
                        <a href="">Giới thiệu</a>
                        <a href="">Cách chọn cỡ giày</a>
                        <a href="shop.html">Dành cho bạn</a>
                    </div>
                </div>
                <div class="para">
                    <p> Chúng tôi đại diện cho điều gì đó lớn hơn giày thể thao.</p>
                    <p> Chúng tôi ủng hộ những người không sợ hãi khi theo đuổi đam mê của mình.</p>
                    <p> Chúng tôi nâng tầm thể thao.</p>
                    <p> Chúng tôi làm điều đúng đắn cho mọi người và hành tinh này.</p>
                    <p> Cùng nhau, chúng tôi thúc đẩy sự thay đổi có ý nghĩa trong cộng đồng trên toàn thế giới.</p>
                    <p> Chúng tôi đã làm được.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="social-share">
                    <button>
                        <img src="./assets/img/logo/facebook.png">
                    </button>
                    <button>
                        <img src="./assets/img/logo/twitter.png">
                    </button>
                    <button>
                        <img src="./assets/img/logo/zalo.webp">
                    </button>
                </div>
                <a href="">Chính sách dịch vụ</a>
                <a href="">Điều khoản & Điều kiện của Trang web</a>
                <p style="margin:0;">BigFoot - Nhóm 10 TMĐT - Copyright 2024</p>
            </div>
        </div>
    </footer>
    `;

    // Thêm HTML vào body
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    changeLoginOrProfileHeaderPart();

    // Mã điều khiển thanh search
    // const searchButton = document.querySelector('#searchButton');
    // if (searchButton) {
    //     searchButton.addEventListener('click', function(){
    //         this.parentElement.classList.toggle('open');
    //         this.previousElementSibling.focus();
    //     });
    // }
});


function changeLoginOrProfileHeaderPart() {
    const accountDiv = document.querySelector('.account');
    const isLoggedIn = checkLogin();
    const roles = checkRoles();


    
    if(isLoggedIn && roles.includes("ADMIN")) {
        accountDiv.innerHTML = `
        <div class="dropdown">
            <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user-circle"></i> Profile
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="user/profile.html">Profile</a></li>
                <li><a class="dropdown-item" href="admin/admin.html">Quản lý Website</a></li>
                <li><a class="dropdown-item" href="#" onclick="logout()">Đăng xuất<i class="fas fa-arrow-circle-right" style="margin-left: 15px;"></i></a></li>
            </ul>
        </div>
    `;
    } else if (isLoggedIn && roles.includes("USER")) {
        // Hiển thị phần dropdown
        accountDiv.innerHTML = `
            <div class="dropdown">
                <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-user-circle"></i> Profile
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="user/profile.html" onclick="redirectToProfilePageWithJWT()">Profile</a></li>
                    <li><a class="dropdown-item" href="#" onclick="logout()">Đăng xuất<i class="fas fa-arrow-circle-right" style="margin-left: 15px;"></i></a></li>
                </ul>
            </div>
        `;
    }
    // } else {
    //     // Hiển thị nút đăng nhập
    //     accountDiv.innerHTML = `
    //         <a href="./login.html">
    //             <div id="login" style="width:max-content">
    //                 <i class="fas fa-user" style="margin-right: 10px"></i>
    //                 Sign in
    //             </div>
    //         </a>
    //     `;
    // }
}

function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(function() {
        notification.style.display = "none";
    }, 5000);
}