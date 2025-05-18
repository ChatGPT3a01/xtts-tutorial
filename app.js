// app.js - 整合版本，將 app-part1.js 和 app-part2.js 的內容結合
const { useState } = React;
const { Facebook, Youtube, Github } = lucideReact;

const InstallationGuide = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  
  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const renderProgressBar = () => {
    const progress = Math.floor((currentStep / totalSteps) * 100);
    return (
      <div className="w-full bg-gray-200 rounded-full h-4 mt-6 mb-2">
        <div 
          className="bg-blue-500 h-4 rounded-full progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">XTTS-v2 開源語音生成模型</h2>
            <p className="mb-4">XTTS-v2 是一款強大的開源文字轉語音系統，能從文字直接生成高擬真的語音對話。</p>
            <p className="mb-4">這個互動式指南將幫助你：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>安裝必要的環境</li>
              <li>設置 XTTS-v2 模型</li>
              <li>創建本地語音生成界面</li>
              <li>生成高品質中文語音</li>
            </ul>
            <div className="p-4 bg-yellow-100 rounded-lg my-4">
              <h3 className="font-bold text-yellow-800">作者資訊</h3>
              <p className="text-yellow-800">曾慶良(阿亮老師)</p>
              <div className="flex mt-2 gap-4">
                <a href="https://www.facebook.com/iddmail/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                  <Facebook size={20} className="mr-1" /> Facebook
                </a>
                <a href="https://www.youtube.com/@Liang-yt02" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800">
                  <Youtube size={20} className="mr-1" /> YouTube
                </a>
              </div>
            </div>
            <p className="font-bold text-blue-800">讓我們開始吧！</p>
          </div>
        );
      
      case 2:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">系統需求</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 p-2 text-left">項目</th>
                    <th className="border border-gray-300 p-2 text-left">建議配置</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">作業系統</td>
                    <td className="border border-gray-300 p-2">Windows 10/11、Ubuntu 20.04+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Python</td>
                    <td className="border border-gray-300 p-2">3.9 或 3.10 (不支持 3.12+)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">顯示卡</td>
                    <td className="border border-gray-300 p-2">建議使用 Nvidia GPU（支援 CUDA）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">CUDA</td>
                    <td className="border border-gray-300 p-2">11.7 或以上（安裝 PyTorch 時對應）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">VRAM</td>
                    <td className="border border-gray-300 p-2">至少 6GB（大模型需 10GB+）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
              <p className="text-yellow-800 font-bold">⚠️ 重要提示：</p>
              <p className="text-yellow-800">XTTS-v2 不支持 Python 3.12 及以上版本，請確保使用 Python 3.9 或 3.10。</p>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">步驟 1：安裝 Python 3.10</h2>
            <p className="mb-4">前往 Python 官網下載並安裝 Python 3.10.11：</p>
            <div className="code-block mb-4">
              <p>https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe</p>
            </div>
            <div className="mb-4">
              <p className="font-bold mb-2">安裝時請注意：</p>
              <ul className="list-disc pl-6">
                <li>勾選「Add Python to PATH」選項</li>
                <li>選擇「Install Now」或「Customize installation」</li>
                <li>如選擇自定義安裝，確保勾選 pip</li>
              </ul>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg mt-4">
              <p className="text-yellow-800 font-bold">💡 提示：</p>
              <p className="text-yellow-800">如果你已有 Python 3.12，建議另外安裝 3.10 版本，因為 XTTS-v2 不支持 3.12。</p>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">步驟 2：複製原始碼並建立虛擬環境</h2>
            <p className="mb-2">打開命令提示字元 (CMD) 或 PowerShell，執行：</p>
            <div className="code-block mb-4">
              <p># 複製 TTS 儲存庫</p>
              <p>git clone https://github.com/coqui-ai/TTS.git</p>
              <p>cd TTS</p>
              <p></p>
              <p># 建立虛擬環境</p>
              <p>python -m venv xtts-env</p>
              <p></p>
              <p># 啟用虛擬環境 (Windows)</p>
              <p>xtts-env\Scripts\activate</p>
              <p></p>
              <p># 啟用虛擬環境 (Linux/macOS)</p>
              <p># source xtts-env/bin/activate</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg mt-4">
              <p className="text-yellow-800 font-bold">💡 提示：</p>
              <p className="text-yellow-800">虛擬環境啟用成功後，命令提示字元前會出現 (xtts-env)。</p>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">步驟 3：修改 requirements.txt</h2>
            <p className="mb-4">需要修改 requirements.txt 文件，移除不兼容的套件。</p>
            <div className="bg-red-100 p-3 rounded-lg mb-4">
              <p className="text-red-800 font-bold">⚠️ 重要：</p>
              <p className="text-red-800">必須移除或註釋掉 <code>trainer>=0.0.36</code> 這一行，否則安裝會失敗。</p>
            </div>
            <p className="mb-2">使用文本編輯器打開 requirements.txt：</p>
            <div className="code-block mb-4">
              <p># 找到這一行</p>
              <p>trainer>=0.0.36</p>
              <p></p>
              <p># 將它修改為（加上 # 註釋）</p>
              <p># trainer>=0.0.36</p>
            </div>
            <p className="mb-4">稍後我們會單獨安裝 trainer 套件。</p>
          </div>
        );
      
      case 6:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">步驟 4：安裝依賴套件</h2>
            <p className="mb-2">在虛擬環境中執行以下命令：</p>
            <div className="code-block mb-4">
              <p># 更新 pip</p>
              <p>python -m pip install --upgrade pip</p>
              <p></p>
              <p># 安裝依賴</p>
              <p>pip install -r requirements.txt</p>
              <p></p>
              <p># 如果 matplotlib 出錯，手動安裝特定版本</p>
              <p>pip install matplotlib==3.8.4</p>
              <p></p>
              <p># 安裝 PyTorch (GPU 版本)</p>
              <p>pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118</p>
              <p></p>
              <p># 如果沒有 GPU，使用 CPU 版本</p>
              <p># pip install torch torchvision torchaudio</p>
              <p></p>
              <p># 安裝 Gradio (Web 界面)</p>
              <p>pip install gradio</p>
              <p></p>
              <p># 安裝 TTS 套件</p>
              <p>pip install -e .</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg mt-4">
              <p className="text-yellow-800 font-bold">💡 提示：</p>
              <p className="text-yellow-800">安裝過程可能需要一些時間，特別是下載 PyTorch 時。請耐心等待。</p>
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">步驟 5：安裝 trainer 套件</h2>
            <p className="mb-4">我們需要單獨安裝 trainer 套件，因為它是 Coqui 的另一個子專案。</p>
            <div className="code-block mb-4">
              <p># 回到上層目錄</p>
              <p>cd ..</p>
              <p></p>
              <p># 複製 trainer 儲存庫</p>
              <p>git clone https://github.com/coqui-ai/trainer.git</p>
              <p>cd trainer</p>
              <p></p>
              <p># 安裝 trainer</p>
              <p>pip install -e .</p>
              <p></p>
              <p># 回到 TTS 目錄</p>
              <p>cd ..\TTS</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg mt-4">
              <p className="text-yellow-800 font-bold">💡 提示：</p>
              <p className="text-yellow-800">這一步很重要！缺少 trainer 套件會導致 TTS 無法正常運行。</p>
            </div>
          </div>
        );
      
      case 8:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">步驟 6：創建 XTTS 啟動腳本</h2>
            <p className="mb-4">在 TTS 目錄中創建一個名為 <code>xtts.py</code> 的文件，內容如下：</p>
            <div className="code-block mb-4 h-80 overflow-y-auto">
              <p>import gradio as gr</p>
              <p>from TTS.api import TTS</p>
              <p># 導入 PyTorch 安全反序列化支援</p>
              <p>from torch.serialization import add_safe_globals</p>
              <p># 導入 XTTS 所需全部類別</p>
              <p>from TTS.tts.configs.xtts_config import XttsConfig</p>
              <p>from TTS.tts.models.xtts import Xtts, XttsAudioConfig, XttsArgs</p>
              <p>from TTS.config.shared_configs import BaseDatasetConfig</p>
              <p># 登錄白名單，解決所有 pickle 錯誤</p>
              <p>add_safe_globals({'{'}</p>
              <p>    XttsConfig,</p>
              <p>    Xtts,</p>
              <p>    XttsAudioConfig,</p>
              <p>    XttsArgs,</p>
              <p>    BaseDatasetConfig,</p>
              <p>{'}'})</p>
              <p># 載入 XTTS-v2 模型</p>
              <p>tts = TTS(model_name="xtts_v2")</p>
              <p># 合成語音函式</p>
              <p>def synthesize(text, language, speaker_wav):</p>
              <p>    output_path = "output.wav"</p>
              <p>    tts.tts_to_file(</p>
              <p>        text=text,</p>
              <p>        speaker_wav=speaker_wav if speaker_wav else None,</p>
              <p>        language=language,</p>
              <p>        file_path=output_path</p>
              <p>    )</p>
              <p>    return output_path</p>
              <p># 建立 Gradio 介面</p>
              <p>ui = gr.Interface(</p>
              <p>    fn=synthesize,</p>
              <p>    inputs=[</p>
              <p>        gr.Textbox(label="輸入中文文字", placeholder="例如：你好，這是語音測試"),</p>
              <p>        gr.Dropdown(choices=["zh-cn", "en", "ja", "fr", "de"], value="zh-cn", label="語言"),</p>
              <p>        gr.Audio(label="語者音訊（選填，支援模仿）", type="filepath")</p>
              <p>    ],</p>
              <p>    outputs=gr.Audio(label="語音輸出", type="filepath"),</p>
              <p>    title="XTTS-v2 本地語音生成介面"</p>
              <p>)</p>
              <p># 啟動</p>
              <p>ui.launch()</p>
            </div>
          </div>
        );
      
      case 9:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">步驟 7：啟動 XTTS 系統</h2>
            <p className="mb-2">在命令提示字元中執行：</p>
            <div className="code-block mb-4">
              <p>python xtts.py</p>
            </div>
            <p className="mb-4">系統將自動：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>下載 XTTS-v2 模型（首次運行時）</li>
              <li>啟動 Gradio Web 介面</li>
              <li>打開瀏覽器（通常是 http://127.0.0.1:7860）</li>
            </ul>
            <div className="mt-4 text-center">
              <div className="bg-black p-4 rounded-lg shadow-lg mx-auto border-2 border-gray-700 max-w-4xl">
                <div className="text-white text-center text-xl mb-4">XTTS-v2 本地語音生成介面</div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 flex-1">
                    <div className="mb-2 text-white">輸入中文文字</div>
                    <div className="p-3 bg-gray-800 rounded-md text-gray-400 mb-4">
                      例如：你好，這是語音測試
                    </div>
                    <div className="mb-2 text-white">語言</div>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center mr-2">
                        <span className="text-white">🚀</span>
                      </div>
                      <div className="p-2 bg-gray-800 text-white rounded-md flex items-center justify-between w-full">
                        <span>zh-cn</span>
                        <span>▼</span>
                      </div>
                    </div>
                    <div className="text-white mb-2">語者音訊（選填，支援模仿）</div>
                    <div className="p-3 bg-gray-800 rounded-md text-center text-gray-400 mb-4">
                      <div className="flex justify-center items-center h-20">
                        <div className="text-center">
                          <div>拖放音訊至此處</div>
                          <div>- 或 -</div>
                          <div>點擊上傳</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-gray-700 text-white py-2 px-4 rounded-md">清除</button>
                      <button className="bg-orange-500 text-white py-2 px-4 rounded-md">提交</button>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 flex-1">
                    <div className="mb-2 text-white flex items-center">
                      <span className="mr-2">語音輸出</span>
                      <span className="text-gray-400">🎵</span>
                    </div>
                    <div className="h-64 bg-gray-800 rounded-md flex justify-center items-center">
                      <span className="text-gray-400">🎵</span>
                    </div>
                    <div className="mt-4">
                      <button className="bg-gray-700 text-white py-2 px-4 w-full rounded-md">Flag</button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">XTTS-v2 Web介面示例圖（運行後瀏覽器中的樣子）</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg mt-4">
              <p className="text-yellow-800 font-bold">💡 提示：</p>
              <p className="text-yellow-800">首次啟動時，系統會下載模型文件，可能需要一些時間。請耐心等待。</p>
            </div>
          </div>
        );
      
      case 10:
        return (
          <div className="rounded-lg bg-blue-50 p-6 step-content">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">完成！未來使用方法</h2>
            <p className="mb-4">恭喜！你已成功安裝 XTTS-v2 系統。每次要使用時，只需：</p>
            
            <div className="code-block mb-4">
              <p># 1. 打開命令提示字元</p>
              <p># 2. 切換到你的專案資料夾</p>
              <p>cd D:\TTS</p>
              <p></p>
              <p># 3. 啟用虛擬環境</p>
              <p>xtts-env\Scripts\activate</p>
              <p></p>
              <p># 4. 執行主程式</p>
              <p>python xtts.py</p>
            </div>
            
            <div className="mb-4">
              <p className="font-bold mb-2">使用方法：</p>
              <ul className="list-disc pl-6">
                <li>在文本框中輸入中文（或其他支持的語言）</li>
                <li>選擇語言（中文、英文、日文、法文、德文）</li>
                <li>可選：上傳語者音頻進行聲音模仿</li>
                <li>點擊提交按鈕</li>
                <li>等待生成並聆聽結果</li>
              </ul>
            </div>
            
            <div className="bg-green-100 p-3 rounded-lg mt-4">
              <p className="text-green-800 font-bold">🎉 成功！</p>
              <p className="text-green-800">你現在可以使用 XTTS-v2 生成高品質的語音了！享受你的 AI 語音之旅吧！</p>
            </div>
            
            <div className="mt-6 border-t pt-4 border-gray-300">
              <p className="text-center text-gray-600">由 <span className="font-bold">曾慶良(阿亮老師)</span> 製作</p>
              <div className="flex justify-center mt-2 gap-4">
                <a href="https://www.facebook.com/iddmail/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                  <Facebook size={20} className="mr-1" /> Facebook
                </a>
                <a href="https://www.youtube.com/@Liang-yt02" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800">
                  <Youtube size={20} className="mr-1" /> YouTube
                </a>
                <a href="https://github.com/coqui-ai/TTS" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                  <Github size={20} className="mr-1" /> Coqui TTS
                </a>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>步驟不存在</div>;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-blue-800">亮的~AI協作開源語音模型建置</h1>
        <div className="flex space-x-2">
          <a href="https://www.facebook.com/iddmail/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <Facebook size={24} />
          </a>
          <a href="https://www.youtube.com/@Liang-yt02" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
            <Youtube size={24} />
          </a>
        </div>
      </div>
      
      {renderProgressBar()}
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">步驟 {currentStep}/{totalSteps}</span>
        <span className="text-sm font-semibold text-blue-800">
          {currentStep === 1 ? '開始' : 
           currentStep === 2 ? '系統需求' : 
           currentStep === 3 ? '安裝 Python' : 
           currentStep === 4 ? '建立環境' : 
           currentStep === 5 ? '修改配置' : 
           currentStep === 6 ? '安裝依賴' : 
           currentStep === 7 ? '安裝 trainer' : 
           currentStep === 8 ? '創建腳本' : 
           currentStep === 9 ? '啟動系統' : '完成'}
        </span>
      </div>
      
      {renderStepContent()}
      
      <div className="flex justify-between mt-6">
        <button 
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded-lg nav-button ${currentStep === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          上一步
        </button>
        <button 
          onClick={handleNext}
          disabled={currentStep === totalSteps}
          className={`px-4 py-2 rounded-lg nav-button ${currentStep === totalSteps ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          {currentStep === totalSteps ? '完成' : '下一步'}
        </button>
      </div>
    </div>
  );
};

// 將 InstallationGuide 元件渲染到 DOM
ReactDOM.render(<InstallationGuide />, document.getElementById('root'));
