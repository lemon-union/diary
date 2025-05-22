// 预设 SHA-256 哈希值
const EXPECTED_HASH = '686f746a95b6f836d7d70567c302c3f9ebb5ee0def3d1220ee9d4e9f34f5e131'; // SHA-256

function verifyPassword() {
    const passwordInput = document.getElementById('userPassword');
    const password = passwordInput.value.trim();

    if (!password) {
        alert('请输入密码');
        return;
    }
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    if (hashedPassword === EXPECTED_HASH) {
        localStorage.setItem('passwordVerified', 'true');
        document.getElementById('passwordModal').style.display = 'none';
    } else {
        alert('密码错误，请重试');
        passwordInput.value = '';
    }
}

// 页面加载时检查密码状态并插入弹窗
(function checkPasswordAndInsertModal() {
    // 如果已经验证过密码，不需要再插入弹窗
    if (localStorage.getItem('passwordVerified') === 'true') {
        return;
    }
    const modalHTML = `
                <div id="passwordModal" style="display: flex;">
                    <div id="passwordBox">
                        <p>欢迎查看我的日记<br> 
                        但你面前的内容有密码保护<br>
                        猜对它，或者，破解它<br>
                        而你至少有4种方法达到这个目的<br>
                        其中绝大多数都非常简单<br>
                        如果你没有想法，那就去问LLM吧</p>
                        <p>提示：<br>
                        本网站完全使用的前端技术<br>
                        尝试从后端破解毫无意义，也请不要这么做</p>
                        <input type="password" id="userPassword" placeholder="密码" />
                        <button onclick="verifyPassword()">确认</button>
                    </div>
                </div>
            `;
        const observer = new MutationObserver(() => {
        if (document.body) {
            observer.disconnect(); // 停止观察器

            document.body.insertAdjacentHTML('afterbegin', modalHTML);
        }
    });
        observer.observe(document.documentElement, { childList: true, subtree: true });
})();
