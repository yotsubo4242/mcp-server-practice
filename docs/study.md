# MCP サーバーについて学んだこと
## Streamable HTTP について
- 従来の HTTP を拡張し, ネットワークでやり取りするデータを小さな塊に分けて処理する通信方式. 
- ここ1・2週間で Cloudflare や VSCode などのサービスで, 組み込まれている MCP の Streamable HTTP への対応を発表している.
- 今までの MCP サーバーのほとんどは, 出力を stdio にて行っていたためローカルでの実行で使用されておりデスクトップアプリケーションなどでしか使用できていなかったが, Streamable HTTP を使用することで MCP サーバーからダイレクトに Web アプリケーションへのアクセスが可能になることが期待される.

参考リンク：
- [Cloudflare で MCP サーバーを構築する](https://azukiazusa.dev/blog/cloudflare-mcp-server/)
- [VS Code⁠⁠、GitHub CopilotのMCPでStreamable HTTP⁠⁠・画像出力に対応](https://gihyo.jp/article/2025/05/vscode-github-copilot-update-202504)
- [HTTPストリーミングについて調べてまとめた](https://note.com/kobotomomorrow/n/nf3501c361c65)

## 