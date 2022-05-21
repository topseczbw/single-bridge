(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{428:function(_,v,t){"use strict";t.r(v);var e=t(26),i=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[_._v("#")]),_._v(" 创建")]),_._v(" "),t("p",[_._v("创建用户，设置用户名、邮箱")]),_._v(" "),t("p",[t("code",[_._v('git config --global user.name "zhangbowen"')])]),_._v(" "),t("p",[t("code",[_._v('git config --global user.email "zbwbiehua@163.com"')])]),_._v(" "),t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[_._v("#")]),_._v(" 初始化")]),_._v(" "),t("p",[_._v("初始化本地git仓库，并关联远程仓库，有两种方法：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("克隆远程仓库到本地，建立本地仓库，并自动建立关联关系。也用于备份仓库")]),_._v(" "),t("p",[t("code",[_._v("git clone [仓库地址]")])])]),_._v(" "),t("li",[t("p",[_._v("初始化本地git仓库")]),_._v(" "),t("p",[t("code",[_._v("git init")])]),_._v(" "),t("p",[_._v("关联远程仓库")]),_._v(" "),t("p",[t("code",[_._v("git remote add origin [仓库地址]")])]),_._v(" "),t("p",[_._v("推送master分支，建立远程master分支，-u是添加关联")]),_._v(" "),t("p",[t("code",[_._v("git push -u origin master")])])])]),_._v(" "),t("h2",{attrs:{id:"远程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程"}},[_._v("#")]),_._v(" 远程")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("查看当前仓库关联的远程仓库")]),_._v(" "),t("p",[t("code",[_._v("git remote -v")])])])]),_._v(" "),t("h2",{attrs:{id:"拉取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取"}},[_._v("#")]),_._v(" 拉取")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("从远程分支获取最新的版本，并merge到本地当前分支")]),_._v(" "),t("p",[t("code",[_._v("git pull origin [远程分支名称]")])])]),_._v(" "),t("li",[t("p",[_._v("对于已经关联远程分支的本地当前分支，可以直接使用")]),_._v(" "),t("p",[t("code",[_._v("git pull")])])])]),_._v(" "),t("h2",{attrs:{id:"分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[_._v("#")]),_._v(" 分支")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("切换分支")]),_._v(" "),t("p",[t("code",[_._v("git checkout [分支名称]")])])]),_._v(" "),t("li",[t("p",[_._v("基于当前分支新建一个分支，并切换到新分支")]),_._v(" "),t("p",[t("code",[_._v("git checkout -b [分支名称]")])])]),_._v(" "),t("li",[t("p",[_._v("查看分支信息")]),_._v(" "),t("p",[t("code",[_._v("git branch")])])]),_._v(" "),t("li",[t("p",[_._v("删除本地分支")]),_._v(" "),t("p",[t("code",[_._v("git branch -D [分支名称]")])])]),_._v(" "),t("li",[t("p",[_._v("删除远程分支")]),_._v(" "),t("p",[t("code",[_._v("git push origin --delete [分支名称]")])])])]),_._v(" "),t("h2",{attrs:{id:"提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[_._v("#")]),_._v(" 提交")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("将当前目录所有文件添加到暂存区")]),_._v(" "),t("p",[_._v("在WebStorm中文件由红色变为绿色，将文件添加到版本管理")]),_._v(" "),t("p",[t("code",[_._v("git add .")])])]),_._v(" "),t("li",[t("p",[_._v("提交暂存区到仓库区（当前分支稳定代码），-m为加注释")]),_._v(" "),t("p",[_._v("在WebStorm中文件由绿色变为白色，更新当前分支代码")]),_._v(" "),t("p",[t("code",[_._v("git commit -m [描述信息]")])])]),_._v(" "),t("li",[t("p",[_._v("查看提交历史")]),_._v(" "),t("p",[t("code",[_._v("git log")])])]),_._v(" "),t("li",[t("p",[_._v("显示当前目录文件与暂存区状态变化")]),_._v(" "),t("p",[_._v("比较当前分支暂存区和仓库区（commit后，当前分支稳定代码）区别")]),_._v(" "),t("p",[t("code",[_._v("git status")])])]),_._v(" "),t("li",[t("p",[_._v("对于新建的本地分支，push到远程仓库，-u是添加关联")]),_._v(" "),t("p",[t("code",[_._v("git push -u origin [分支名称]")])])]),_._v(" "),t("li",[t("p",[_._v("对于已关联远程分支的本地当前分支，可以直接使用")]),_._v(" "),t("p",[t("code",[_._v("git push")])])]),_._v(" "),t("li",[t("p",[_._v("修改最近一次commit的message")]),_._v(" "),t("p",[t("code",[_._v("git commit --amend")])])]),_._v(" "),t("li",[t("p",[_._v("修改旧的commit的message，要使用rebase")]),_._v(" "),t("p",[t("code",[_._v("git rebase -i [目标commit的上一个commitId]")])]),_._v(" "),t("p",[_._v("找到目标commit，选择r命令，只修改commit的message")])]),_._v(" "),t("li",[t("p",[_._v("整理合并几个连续的commit")]),_._v(" "),t("p",[t("code",[_._v("git rebase -i [需要合并的目标commit列表中的最上面的一个commit的上一个commitId]")])]),_._v(" "),t("p",[_._v("使用s命令，将后面的commit合并到前面的commit")])]),_._v(" "),t("li",[t("p",[_._v("整理合并不连续的commit")]),_._v(" "),t("p",[t("code",[_._v("git rebase -i [需要合并的目标commit列表中的最上面的一个commit的上一个commitId]")])]),_._v(" "),t("p",[_._v("手动编辑commit的顺序，其他同上")])])]),_._v(" "),t("h2",{attrs:{id:"比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[_._v("#")]),_._v(" 比较")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("比较暂存区和HEAD差异")]),_._v(" "),t("p",[t("code",[_._v("git diff cached")])])]),_._v(" "),t("li",[t("p",[_._v("比较工作区和暂存区差异")]),_._v(" "),t("p",[t("code",[_._v("git diff")])])])]),_._v(" "),t("h2",{attrs:{id:"合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并"}},[_._v("#")]),_._v(" 合并")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("合并其他分支代码到当前分支")]),_._v(" "),t("p",[t("code",[_._v("git merge [其他分支名称]")])])])]),_._v(" "),t("h2",{attrs:{id:"还原、撤销"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#还原、撤销"}},[_._v("#")]),_._v(" 还原、撤销")]),_._v(" "),t("p",[_._v("revert：撤销。一般用于删除某个commit，在log中会有记录")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("撤销某个提交过的commit")]),_._v(" "),t("p",[t("code",[_._v("git revert [commit-id]")])]),_._v(" "),t("p",[_._v("执行这个操作时，git需要一条新的commit记录这次操作")])])]),_._v(" "),t("p",[_._v('reset：回滚。一般在"线上事故"通常需要回滚到想要的版本（分支），再提交到远程分支，解决问题')]),_._v(" "),t("ol",[t("li",[t("p",[_._v("撤回当前代码到历史某一版本号代码")]),_._v(" "),t("p",[t("code",[_._v("git reset [commit-id]")])])]),_._v(" "),t("li",[t("p",[_._v('回滚到某个版本，强推到远程分支，发布。一般用于"线上事故"')]),_._v(" "),t("p",[t("code",[_._v("git reset [commit-id]")])]),_._v(" "),t("p",[_._v("对于已关联的分支："),t("code",[_._v("git push -f")])]),_._v(" "),t("p",[_._v("对于未关联的分支："),t("code",[_._v("git push origin HEAD:[branch-name] -f")])])]),_._v(" "),t("li",[t("p",[_._v("撤销工作目录中所有未提交文件的修改内容")]),_._v(" "),t("p",[t("code",[_._v("git reset --hard HEAD")])])]),_._v(" "),t("li",[t("p",[_._v("将暂存区所有文件还原到HEAD版本")]),_._v(" "),t("p",[t("code",[_._v("git reset HEAD")])])]),_._v(" "),t("li",[t("p",[_._v("将暂存区部分文件还原到HEAD版本")]),_._v(" "),t("p",[t("code",[_._v("git reset HEAD -- [目标文件]")])])]),_._v(" "),t("li",[t("p",[_._v("将工作区部分文件还原到暂存区版本")]),_._v(" "),t("p",[t("code",[_._v("git checkout -- [目标文件]")])])])]),_._v(" "),t("h2",{attrs:{id:"打标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打标签"}},[_._v("#")]),_._v(" 打标签")]),_._v(" "),t("p",[_._v("标签是与分支是并行的两个概念，我们可以检出分支，得到指定版本代码，也可以通过检出tag，得到指定版本代码，tag方式一般用于线上发布做标记。")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("查看tag")]),_._v(" "),t("p",[t("code",[_._v("git tag")])])]),_._v(" "),t("li",[t("p",[_._v("删除本地tag")]),_._v(" "),t("p",[t("code",[_._v("git tag -d [tag-name]")])])]),_._v(" "),t("li",[t("p",[_._v("给当前版本打一个tag")]),_._v(" "),t("p",[t("code",[_._v("git tag v2019-04-01")])]),_._v(" "),t("p",[t("code",[_._v("git tag -a [标签名称] -m [标签描述]")])])]),_._v(" "),t("li",[t("p",[_._v("将标签推送到远程仓库")]),_._v(" "),t("p",[t("code",[_._v("git push origin [标签名称]")])])]),_._v(" "),t("li",[t("p",[_._v("查看标签详情")]),_._v(" "),t("p",[t("code",[_._v("git show [标签名]")])])]),_._v(" "),t("li",[t("p",[_._v("删除远程tag")]),_._v(" "),t("p",[_._v("先删除本地tag，再推到远程仓库")]),_._v(" "),t("p",[t("code",[_._v("git tag -d [tag-name]")])]),_._v(" "),t("p",[t("code",[_._v("git push origin :refs/tags/[标签名]")])])]),_._v(" "),t("li",[t("p",[_._v("新建一个本地tag")]),_._v(" "),t("p",[t("code",[_._v("git tag v2019-09-19")])])])]),_._v(" "),t("h2",{attrs:{id:"储藏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#储藏"}},[_._v("#")]),_._v(" 储藏")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("储藏当前状态")]),_._v(" "),t("p",[t("code",[_._v("git stash")])])]),_._v(" "),t("li",[t("p",[_._v("查看所有储藏状态列表")]),_._v(" "),t("p",[t("code",[_._v("git stash list")])])]),_._v(" "),t("li",[t("p",[_._v("导出指定储藏状态")]),_._v(" "),t("p",[t("code",[_._v("git stash apply stash@{index}")])])]),_._v(" "),t("li",[t("p",[_._v("删除指定储藏状态")]),_._v(" "),t("p",[t("code",[_._v("git stash drop stash@{index}")])])]),_._v(" "),t("li",[t("p",[_._v("重新应用，并移除储藏")]),_._v(" "),t("p",[t("code",[_._v("git stash pop")])])])]),_._v(" "),t("h2",{attrs:{id:"修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[_._v("#")]),_._v(" 修改")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("修改最后一次改动")]),_._v(" "),t("p",[t("code",[_._v("git commit --amend")])])])]),_._v(" "),t("h2",{attrs:{id:"变基"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变基"}},[_._v("#")]),_._v(" 变基")]),_._v(" "),t("p",[_._v("rebase常用两个功能：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("合并多次描述冗余的commit为一次精简的commit")]),_._v(" "),t("p",[_._v("推荐："),t("a",{attrs:{href:"https://www.jianshu.com/p/4a8f4af4e803",target:"_blank",rel:"noopener noreferrer"}},[_._v("【Git】rebase 用法小结"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("git rebase -i HEAD~4  // 从当前commit起，包括当前，选择处理前4个commit，s指令表示与之前的commit进行合并")])]),_._v(" "),t("li",[t("p",[_._v("保证提交分支图优雅（直线型）展示")]),_._v(" "),t("p",[_._v("改变当前分支commit基础，在新的基础上追加当前分支自己的commit，当前分支rebase完成后，再合并到其他分支，就不会出现像下方的无意义提交记录了")]),_._v(" "),t("p",[t("code",[_._v("Merge branch '$test$' into bugfix")])]),_._v(" "),t("p",[_._v("例：多人协作时，主分支为bugfix，成员A在bugfix_A上完成自己的bug修复，提交commit，切到本地bugfix，pull下了B的commit")]),_._v(" "),t("p",[_._v("方式一：")]),_._v(" "),t("p",[_._v("如果直接将bugfix_A分支merge到bugfix，会出现提交记录中多出一条")]),_._v(" "),t("p",[t("code",[_._v("Merge branch 'bugfix_A' into bugfix")])]),_._v(" "),t("p",[_._v("这并不是我们希望的")]),_._v(" "),t("p",[_._v("方式二：")]),_._v(" "),t("p",[_._v("成员A切回到自己的bugfix_A分支，使用 "),t("code",[_._v("git rebase bugfix")]),_._v(" ,将自己的commit在此时的bugfix分支代码基础上（此分支已更新有成员B的commit）提交")]),_._v(" "),t("p",[_._v("完成rebase后，在将bugfix_A分支merge到bugfix分支，此时发现并没有任何无意义的提交记录，push到远程分支")]),_._v(" "),t("p",[_._v("rebase 过程中可能会遇到冲突，因为相当于把成员B的代码和成员A的代码做了一次整合")]),_._v(" "),t("p",[_._v("解决完冲突之后，使用 "),t("code",[_._v("git add .")]),_._v("，标记为已解决")]),_._v(" "),t("p",[_._v("再 "),t("code",[_._v("git rebase --continue")]),_._v(" 完成rebase")])])]),_._v(" "),t("h2",{attrs:{id:"q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[_._v("#")]),_._v(" Q&A")]),_._v(" "),t("ol",[t("li",[t("p",[t("strong",[_._v("执行 git merge 时分支处于merging状态，提示MERGE_MSG.swp文件报错")])]),_._v(" "),t("p",[_._v("执行 git pull 或者 push 或者 merge 命令操作的时候，当前分支一直处于merging状态")]),_._v(" "),t("p",[_._v("当打开 git/MERGE_MSG 文件的时候，发现有 git/MERGE_MSG.swp 文件的存在，并且从时间上来看， MERGE_MSG 比 MERGE_MSG.swp 要更新")]),_._v(" "),t("p",[t("strong",[_._v("关于 MERGE_MSG.swp 文件的说明：")])]),_._v(" "),t("p",[_._v(".swp 文件和 git 无关，在使用 VIM 开始编辑某文件时，都会产生该文件对应的 .swp 文件。正常的退出，VIM 会自动除此类型文件，非正常退出情况下， VIM 不会删除 ，.swp 文件会作为文件编辑状态的内容备份")]),_._v(" "),t("p",[_._v("其实多次打开多次不正常关闭，会一直产生 .sw* 文件")]),_._v(" "),t("p",[t("strong",[_._v("问题解决：")])]),_._v(" "),t("p",[_._v("第一步：回到合并前状态")]),_._v(" "),t("p",[t("code",[_._v("git merge -abort")]),_._v(" 或者 "),t("code",[_._v("git reset --hard HEAD")])]),_._v(" "),t("p",[_._v("第二步：删除 vim 非正常关闭产生的文件")]),_._v(" "),t("p",[_._v("rm .git/.MERGE_MSG.sw*")]),_._v(" "),t("p",[_._v("第三步：重新合并")]),_._v(" "),t("p",[t("code",[_._v("git merge [分支名称]")])]),_._v(" "),t("p",[_._v("使用"),t("code",[_._v(":wq")]),_._v("正常安全退出")])]),_._v(" "),t("li",[t("p",[_._v("指定不需要git管理的文件")]),_._v(" "),t("p",[_._v("使用.gitignore文件，/结尾指文件夹，后缀名结尾指具体文件")])]),_._v(" "),t("li",[t("p",[_._v("设置ssh，配置公私钥")]),_._v(" "),t("p",[_._v("创建私钥："),t("code",[_._v('ssh-keygen -t rsa -b 4096 -C "[邮箱地址]"')])]),_._v(" "),t("p",[_._v("一路回车")]),_._v(" "),t("p",[_._v("cd ~/.ssh    寻找ssh文件夹")]),_._v(" "),t("p",[_._v("cat id_rsa.pub   复制粘贴key")]),_._v(" "),t("p",[_._v("粘贴到github的账号  setting——ssh and GPG key")])])]),_._v(" "),t("h2",{attrs:{id:"commit命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit命名规范"}},[_._v("#")]),_._v(" Commit命名规范")]),_._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[_._v("feat：新功能（feature）\nfix：修补bug\ndocs：文档（documentation）\nstyle： 格式（不影响代码运行的变动）\nrefactor：重构（即不是新增功能，也不是修改bug的代码变动）\ntest：增加测试\nchore：构建过程或辅助工具的变动\n")])])]),t("p",[_._v("摘自"),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("《阮一峰 Commit message 和 Change log 编写指南》"),t("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=i.exports}}]);