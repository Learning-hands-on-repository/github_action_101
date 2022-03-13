# Github Action Zero to Zero point one!

Push to main branch flow

```mermaid
sequenceDiagram
    Dev->>Github: Push new code [main]
    Github->>Github Action: Trigger workflow
    Github Action->>Github Action: Run Build & Test Job
    alt Build & test is pass
        Github Action->>Github Action: Run Deploy Job
        Github Action->>Heroku: Deploy
    else Faild
        Github Action->>Github: Skip Deploy
    end
```


Create a pull request flow

```mermaid
sequenceDiagram
    Dev->>Github: Create a pull request
    Github->>Github Action: Trigger workflow
    Github Action->>Github Action: Run Build & Test Job
    alt Build & test is pass
        Github Action->>Github Action: Run Deploy Job
        Github Action->>Heroku: Deploy
        Heroku ->> Github Action: Deployed
        Github Action ->> Github: Pass
        Github ->> Dev: You can merge :D
    else Faild
        Github Action->>Github: Skip Deploy
        Github ->> Dev: Can't merge, one check is failed :(
    end
```
In this flow, you need to go to Github repository and add some configuration there
- set [Require status checks to pass before merging.](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)
- Can't see the name of check? please check out [this](https://stackoverflow.com/questions/68554735/github-action-status-check-missing-from-the-list-of-checks-in-protected-branch-s#comment123779008_68613319)
            
