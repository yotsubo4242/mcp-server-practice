import { McpAgent } from "agents/mcp"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export class MyMCP extends McpAgent {
    server = new McpServer({
        name: 'MyMCP Server',
        version: '0.1.0',
    });

    async init() {
        this.server.tool(
            // ツールの名前
            'dice-roll',
            // ツールの説明
            '指定された回数分, サイコロを振った結果を返します',
            // ツールの引数
            {
                sides: z.number().min(1).max(100).default(6).describe('サイコロの面の数'),
                times: z.number().min(1).max(100).default(1).describe('振る回数'),
            },
            // ツールの実行関数
            async ({ sides, times }: { sides: number, times:number }) => {
                const results = Array.from({ length: times }, () => Math.floor(Math.random() * sides) + 1);
                // ツールの実行結果を返す
                // 返す値は、MCPの仕様に従って、contentプロパティを持つオブジェクトである必要がある
                return {
                    content: [{ type: 'text', text: results.toString() }],
                }
            }
        )
    }
}